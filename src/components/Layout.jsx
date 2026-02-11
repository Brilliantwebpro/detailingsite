import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import logoImage from "../assets/Detailing images/abrams detailing logo.png";

const Layout = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const animateCounter = (el) => {
      if (el.dataset.animated === "true") return;
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value.toLocaleString()}${suffix}`;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      el.dataset.animated = "true";
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          if (entry.target.classList.contains("counter")) {
            animateCounter(entry.target);
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".reveal, .counter");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <div className={`site${menuOpen ? " menu-open" : ""}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className={`loading-screen${isLoading ? " is-active" : ""}`}>
        <div className="loading-ring" />
        <span>Preparing the detailing experience</span>
      </div>

      <header className={`header${isScrolled ? " is-solid" : ""}`}>
        <nav className="nav">
          <NavLink to="/" className="logo" aria-label="Abrams Auto Detailing LLC">
            <img className="logo-image" src={logoImage} alt="Abrams Auto Detailing LLC logo" />
            <span className="logo-text">Abrams Auto Detailing LLC</span>
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link cta">
              Book Consultation
            </NavLink>
          </div>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </nav>
        <div id="mobile-menu" className={`nav-panel${menuOpen ? " is-open" : ""}`}>
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link cta">
            Book Consultation
          </NavLink>
        </div>
      </header>

      <main id="main" className="main" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="logo">
            <img className="logo-image" src={logoImage} alt="Abrams Auto Detailing LLC logo" />
            <span className="logo-text">Abrams Auto Detailing LLC</span>
          </div>
          <p>
            Boutique detailing studio delivering concours-level results for
            discerning owners. Crafted for performance vehicles, luxury
            collections, and daily drivers that deserve more.
          </p>
        </div>
        <div className="footer-grid">
          <div>
            <h4>Contact</h4>
            <p>Call: (404) 555-0198</p>
            <p>Email: concierge@abramsautodetail.com</p>
            <p>Hours: Mon-Sat, 8:00am-7:00pm</p>
          </div>
          <div>
            <h4>Service Areas</h4>
            <p>Atlanta</p>
            <p>Buckhead</p>
            <p>Alpharetta</p>
            <p>Sandy Springs</p>
            <p>Roswell</p>
          </div>
          <div>
            <h4>Experience</h4>
            <p>Insured & climate-controlled</p>
            <p>Paint-safe, pH-balanced products</p>
            <p>Concierge pickup & delivery</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Abrams Auto Detailing LLC. All rights reserved.</p>
          <p className="muted">Luxury auto detailing and protection.</p>
        </div>
      </footer>

      <div className="floating-cta">
        <Button to="/contact" variant="primary">
          Book Consultation
        </Button>
        <a className="call-link" href="tel:+14045550198">
          Call (404) 555-0198
        </a>
      </div>
    </div>
  );
};

export default Layout;
