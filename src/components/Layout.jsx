import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import AnimatedOutlet from "./AnimatedOutlet";
import {
  headerReveal,
  logoMarkSpring,
  navItem,
  navStagger,
} from "../motion/variants";
import "./Layout.css";

const nav = [
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact us" },
  { to: "/terms", label: "Terms of use" },
  { to: "/privacy", label: "Privacy policy" },
];

export default function Layout() {
  return (
    <div className="layout">
      <motion.header
        className="header"
        variants={headerReveal}
        initial="hidden"
        animate="visible"
      >
        <div className="header__inner">
          <NavLink to="/about" className="logo" end>
            <motion.span
              className="logo__mark logo__mark--animated"
              variants={logoMarkSpring}
              initial="hidden"
              animate="visible"
              aria-hidden
            />
            <span className="logo__textblock">
              <span className="logo__text">Comesh</span>
              <span className="logo__tagline">Legal &amp; information</span>
            </span>
          </NavLink>
          <motion.nav
            className="nav"
            aria-label="Main"
            variants={navStagger}
            initial="hidden"
            animate="visible"
          >
            {nav.map(({ to, label }) => (
              <motion.div
                key={to}
                variants={navItem}
                className="nav__item"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " nav__link--active" : "")
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        </div>
        <div className="header__accent header__accent--animated" aria-hidden />
      </motion.header>

      <main className="main">
        <AnimatedOutlet />
      </main>

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <div className="footer__inner">
          <nav className="footer__nav" aria-label="Legal shortcuts">
            <NavLink to="/terms">Terms of use</NavLink>
            <NavLink to="/privacy">Privacy policy</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <p className="footer__note">
            © {new Date().getFullYear()} Comesh. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
