import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const nav = [
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact us" },
  { to: "/terms", label: "Terms & conditions" },
  { to: "/privacy", label: "Privacy policy" },
];

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header__inner">
          <NavLink to="/about" className="logo" end>
            <span className="logo__mark" aria-hidden />
            <span className="logo__text">Comesh</span>
          </NavLink>
          <nav className="nav" aria-label="Main">
            {nav.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " nav__link--active" : "")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="header__accent" aria-hidden />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p className="footer__note">
          © {new Date().getFullYear()} Comesh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
