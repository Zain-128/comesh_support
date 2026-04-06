import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpChild, staggerParent } from "../motion/variants";

export default function About() {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={fadeUpChild} className="page-title">
        About us
      </motion.h1>
      <motion.p variants={fadeUpChild} className="page-lead">
        Comesh connects creators and collaborators — built with the same energy as
        our mobile experience: bold, clear, and human.
      </motion.p>

      <motion.section variants={fadeUpChild} className="content-block">
        <h2>Our mission</h2>
        <p>
          We help people discover each other, share their work, and build meaningful
          connections around content. Whether you create, collaborate, or both, Comesh
          is designed to make matching and messaging simple.
        </p>
      </motion.section>

      <motion.section variants={fadeUpChild} className="content-block">
        <h2>What we offer</h2>
        <ul>
          <li>Profiles that highlight your niche, availability, and social presence</li>
          <li>Tools to find and connect with others who fit your goals</li>
          <li>In-app messaging so conversations stay in one place</li>
        </ul>
      </motion.section>

      <motion.section variants={fadeUpChild} className="content-block">
        <h2>Contact</h2>
        <p>
          Use the{" "}
          <Link to="/contact">Contact us</Link> page on this site, or the in-app help in the
          Comesh application.
        </p>
      </motion.section>
    </motion.div>
  );
}
