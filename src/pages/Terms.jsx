import { motion } from "framer-motion";
import { fadeUpChild, staggerParent } from "../motion/variants";

export default function Terms() {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeUpChild} className="page-title">
        Terms &amp; conditions
      </motion.h1>
      <motion.p variants={fadeUpChild} className="last-updated">
        Last updated: April 1, 2026
      </motion.p>
      <motion.p variants={fadeUpChild} className="page-lead">
        These terms govern your use of Comesh. Please read them carefully. This is
        placeholder text — have it reviewed by legal counsel before publication.
      </motion.p>

      <motion.section variants={fadeUpChild} className="content-block">
        <h2>1. Agreement</h2>
        <p>
          By accessing or using Comesh (&quot;Service&quot;), you agree to be bound by
          these Terms. If you do not agree, do not use the Service.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must meet the minimum age required in your region (e.g. 18+ where
          applicable) and have the legal capacity to enter into this agreement.
        </p>

        <h2>3. Accounts</h2>
        <p>
          You are responsible for your account credentials and for all activity under
          your account. Notify us promptly of any unauthorized use.
        </p>

        <h2>4. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Violate applicable laws or third-party rights</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Upload malware or attempt to disrupt the Service</li>
          <li>Scrape, reverse engineer, or misuse our systems without permission</li>
        </ul>

        <h2>5. Content</h2>
        <p>
          You retain rights to content you submit. You grant Comesh a license to host,
          display, and distribute that content as needed to operate the Service. You
          represent that you have the rights to grant this license.
        </p>

        <h2>6. Subscriptions &amp; payments</h2>
        <p>
          If the Service offers paid features, fees, billing cycles, and cancellation
          terms will be presented at purchase. Adjust this section to match your actual
          payment provider and refund policy.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate access for violations of these Terms or for other
          operational reasons as described in our policies.
        </p>

        <h2>8. Disclaimers</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind,
          to the fullest extent permitted by law.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the extent permitted by law, Comesh and its affiliates will not be liable
          for indirect, incidental, or consequential damages arising from your use of the
          Service.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update these Terms. We will provide notice as required by law; continued
          use after changes constitutes acceptance where permitted.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these Terms, contact us through the channels listed in the
          app or on your official website.
        </p>
      </motion.section>
    </motion.div>
  );
}
