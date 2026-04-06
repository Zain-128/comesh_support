import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getApiBaseUrl } from "../api/config";
import { easeOut } from "../motion/variants";
import { usePageTextReveal } from "../hooks/usePageTextReveal";
import "./Contact.css";

const bannerMotion = {
  initial: { opacity: 0, y: -12, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: easeOut },
};

export default function Contact() {
  const rootRef = usePageTextReveal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorText, setErrorText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorText("");
    setStatus("loading");
    try {
      const res = await fetch(`${getApiBaseUrl()}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        let msg = data?.message;
        if (Array.isArray(msg)) msg = msg.join(" ");
        if (typeof msg !== "string" || !msg.trim()) {
          msg = `Request failed (${res.status})`;
        }
        throw new Error(msg);
      }
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorText(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div ref={rootRef}>
      <h1 className="page-title gsap-text">Contact us</h1>
      <p className="page-lead gsap-text">
        Send us a message — we read every submission and will get back when
        appropriate.
      </p>

      <AnimatePresence mode="popLayout">
        {status === "success" && (
          <motion.div
            key="success"
            className="contact-banner contact-banner--success"
            role="status"
            {...bannerMotion}
          >
            Thanks — your message has been sent.
          </motion.div>
        )}
        {status === "error" && errorText && (
          <motion.div
            key="error"
            className="contact-banner contact-banner--error"
            role="alert"
            {...bannerMotion}
          >
            {errorText}
          </motion.div>
        )}
      </AnimatePresence>

      <form
        className="contact-form content-block gsap-text"
        onSubmit={handleSubmit}
      >
        <label className="contact-field">
          <span className="contact-label">Name</span>
          <input
            className="contact-input"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label className="contact-field">
          <span className="contact-label">Email</span>
          <input
            className="contact-input"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label className="contact-field">
          <span className="contact-label">Subject (optional)</span>
          <input
            className="contact-input"
            name="subject"
            type="text"
            maxLength={200}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What is this about?"
          />
        </label>
        <label className="contact-field">
          <span className="contact-label">Message</span>
          <textarea
            className="contact-input contact-textarea"
            name="message"
            required
            rows={6}
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
          />
        </label>
        <button type="submit" className="contact-submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
