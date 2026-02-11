import React from "react";
import Button from "../components/Button.jsx";
import aboutHero from "../assets/Detailing images/495568992_1152708246658946_879685826914898724_n.jpg";
import studioImage from "../assets/Detailing images/495540608_1152707759992328_6644066427613382358_n.jpg";

const About = () => {
  return (
    <div className="page">
      <section
        className="hero hero-inner parallax"
        style={{ "--hero-image": `url(${aboutHero})` }}
      >
        <div className="hero-content reveal">
          <p className="eyebrow">About Abrams</p>
          <h1>Crafted by artisans who live for the finish.</h1>
          <p className="subhead">
            Abrams Auto Detailing LLC was built for clients who appreciate
            craftsmanship, discretion, and a detail standard beyond the average
            mobile detailer.
          </p>
          <div className="hero-actions">
            <Button to="/contact" variant="primary">
              Book a Private Consult
            </Button>
            <Button to="/services" variant="secondary">
              View Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section split-layout reveal">
        <div className="split-copy">
          <p className="eyebrow">Our story</p>
          <h2>Precision detailing with a hospitality mindset.</h2>
          <p>
            Founded by a team of automotive enthusiasts, Abrams blends technical
            correction expertise with a concierge approach. We invest in
            lighting, tools, and training so every vehicle leaves our studio
            with the confidence of a new delivery day.
          </p>
          <p>
            Our process prioritizes careful surface prep, measured product
            application, and a final quality inspection that mirrors showroom
            delivery standards.
          </p>
        </div>
        <div className="split-media" style={{ "--service-image": `url(${studioImage})` }}>
          <span>Studio Bay</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Mission & values</p>
            <h2>Luxury care with integrity at every step.</h2>
          </div>
          <p>
            We protect the investment our clients make in their vehicles while
            delivering a calm, confident experience.
          </p>
        </div>
        <div className="grid">
          <article className="glass-card reveal">
            <h3>Craftsmanship</h3>
            <p>Every surface is treated with care, patience, and precision.</p>
          </article>
          <article className="glass-card reveal">
            <h3>Discretion</h3>
            <p>Private scheduling, secure storage, and concierge updates.</p>
          </article>
          <article className="glass-card reveal">
            <h3>Transparency</h3>
            <p>Clear communication, detailed reports, and honest guidance.</p>
          </article>
        </div>
      </section>

      <section className="section trust-panel reveal">
        <div className="section-head">
          <div>
            <p className="eyebrow">Trust</p>
            <h2>Designed for owners who value certainty.</h2>
          </div>
          <p>
            From inspection reports to insured handling, every step is built to
            earn trust immediately.
          </p>
        </div>
        <div className="trust-grid">
          <div className="trust-card">
            <h4>Insured and bonded</h4>
            <p>Fully covered services with secure vehicle handling.</p>
          </div>
          <div className="trust-card">
            <h4>Certified products</h4>
            <p>Authorized ceramic and paint-correction systems.</p>
          </div>
          <div className="trust-card">
            <h4>White-glove delivery</h4>
            <p>Final walkthrough and maintenance guidance.</p>
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="cta-inner reveal">
          <div>
            <p className="eyebrow">Let us meet your vehicle</p>
            <h2>Schedule a private tour of our studio.</h2>
            <p>
              Learn about our process, see the facility, and explore the right
              service plan for your vehicle.
            </p>
          </div>
          <Button to="/contact" variant="primary">
            Schedule a Tour
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
