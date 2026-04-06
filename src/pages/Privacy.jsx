import { usePageTextReveal } from "../hooks/usePageTextReveal";

export default function Privacy() {
  const rootRef = usePageTextReveal();

  return (
    <div ref={rootRef} className="legal-page">
      <header className="page-header">
        <h1 className="page-title gsap-text">Privacy policy</h1>
        <p className="last-updated gsap-text">Last updated: 1 April 2026</p>
        <p className="page-lead gsap-text">
          This policy describes how Comesh collects, uses, and shares information. Replace
          with counsel-approved text that matches your actual data practices.
        </p>
      </header>

      <section className="content-block gsap-text">
        <h2>1. Who we are</h2>
        <p>
          Comesh (&quot;we&quot;, &quot;us&quot;) operates the Comesh mobile application
          and related services. The data controller details and contact information should
          be inserted here for your jurisdiction.
        </p>

        <h2>2. Information we collect</h2>
        <h3>2.1 You provide</h3>
        <p>Examples may include:</p>
        <ul>
          <li>Account details (e.g. name, email, profile information)</li>
          <li>Content you upload (e.g. photos, videos, descriptions)</li>
          <li>Communications with support or other users through the Service</li>
        </ul>

        <h3>2.2 Automatically</h3>
        <p>Examples may include:</p>
        <ul>
          <li>Device and app diagnostics, IP address, approximate location if enabled</li>
          <li>Usage data (e.g. features used, session information)</li>
          <li>Push notification tokens if you opt in</li>
        </ul>

        <h2>3. How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>Provide, secure, and improve the Service</li>
          <li>Personalize your experience and recommendations</li>
          <li>Communicate with you about the Service</li>
          <li>Comply with law and enforce our terms</li>
        </ul>

        <h2>4. Legal bases (where applicable)</h2>
        <p>
          If GDPR or similar laws apply, we rely on bases such as contract, legitimate
          interests, consent (where required), and legal obligation — tailored to your
          actual processing activities.
        </p>

        <h2>5. Sharing</h2>
        <p>We may share information with:</p>
        <ul>
          <li>Service providers who assist us (hosting, analytics, customer support)</li>
          <li>Authorities when required by law</li>
          <li>Other users according to your profile and in-app settings</li>
        </ul>
        <p>We do not sell your personal information as a matter of policy.</p>

        <h2>6. Retention</h2>
        <p>
          We retain information as long as needed to provide the Service and for
          legitimate business purposes, unless a longer period is required by law.
        </p>

        <h2>7. Security</h2>
        <p>
          We implement technical and organizational measures designed to protect your
          information. No method of transmission over the internet is 100% secure.
        </p>

        <h2>8. Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete,
          or export your data, or to object to or restrict certain processing. Contact us
          to exercise these rights.
        </p>

        <h2>9. Children</h2>
        <p>
          The Service is not directed at children under the minimum age required in your
          region. We do not knowingly collect personal information from children.
        </p>

        <h2>10. International transfers</h2>
        <p>
          If we transfer data across borders, we use appropriate safeguards as required
          by applicable law.
        </p>

        <h2>11. Third-party links</h2>
        <p>
          The Service may link to third-party sites or services. Their privacy practices
          are governed by their own policies.
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this policy. We will post the new version and adjust the
          &quot;Last updated&quot; date. Material changes may require additional notice
          where required by law.
        </p>

        <h2>13. Contact</h2>
        <p>
          For privacy questions or requests, contact us through the channels provided in
          the Comesh app or your official privacy contact email.
        </p>
      </section>
    </div>
  );
}
