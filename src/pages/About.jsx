import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="page-title">About us</h1>
      <p className="page-lead">
        Comesh connects creators and collaborators — built with the same energy as
        our mobile experience: bold, clear, and human.
      </p>

      <section className="content-block">
        <h2>Our mission</h2>
        <p>
          We help people discover each other, share their work, and build meaningful
          connections around content. Whether you create, collaborate, or both, Comesh
          is designed to make matching and messaging simple.
        </p>
      </section>

      <section className="content-block">
        <h2>What we offer</h2>
        <ul>
          <li>Profiles that highlight your niche, availability, and social presence</li>
          <li>Tools to find and connect with others who fit your goals</li>
          <li>In-app messaging so conversations stay in one place</li>
        </ul>
      </section>

      <section className="content-block">
        <h2>Contact</h2>
        <p>
          Use the{" "}
          <Link to="/contact">Contact us</Link> page on this site, or the in-app help in the
          Comesh application.
        </p>
      </section>
    </>
  );
}
