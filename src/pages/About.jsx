import { Link } from "react-router-dom";
import OfferFlow from "../components/OfferFlow";
import { usePageTextReveal } from "../hooks/usePageTextReveal";

export default function About() {
  const rootRef = usePageTextReveal();

  return (
    <div ref={rootRef}>
      <h1 className="page-title gsap-text">About us</h1>
      <p className="page-lead gsap-text">
        Comesh connects creators and collaborators — built with the same energy as
        our mobile experience: bold, clear, and human.
      </p>

      <section className="content-block gsap-text">
        <h2>Our mission</h2>
        <p>
          We help people discover each other, share their work, and build meaningful
          connections around content. Whether you create, collaborate, or both, Comesh
          is designed to make matching and messaging simple.
        </p>
      </section>

      <section className="offer-section gsap-text">
        <OfferFlow />
      </section>

      <section className="content-block gsap-text">
        <h2>Contact</h2>
        <p>
          Use the{" "}
          <Link to="/contact">Contact us</Link> page on this site, or the in-app help in the
          Comesh application.
        </p>
      </section>
    </div>
  );
}
