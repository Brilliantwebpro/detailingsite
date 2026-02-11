import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import contactHero from "../assets/Detailing images/633356384_1372167428046359_2251940743765927913_n.jpg";

const Contact = () => {
  return (
    <div className="page">
      <section
        className="hero hero-inner parallax"
        style={{ "--hero-image": `url(${contactHero})` }}
      >
        <div className="hero-content reveal">
          <p className="eyebrow">Contact</p>
          <h1>Request your private detailing consultation.</h1>
          <p className="subhead">
            Tell us about your vehicle and expectations. We will respond with a
            tailored service plan, timeline, and pricing guidance.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-layout">
          <ContactForm />
          <div className="contact-details reveal">
            <div className="contact-card">
              <h3>Call the concierge</h3>
              <p>(404) 555-0198</p>
              <a className="call-button" href="tel:+14045550198">
                Click to Call
              </a>
            </div>
            <div className="contact-card">
              <h3>Studio hours</h3>
              <p>Mon-Sat · 8:00am-7:00pm</p>
              <p>Sunday by appointment only</p>
            </div>
            <div className="contact-card">
              <h3>Service areas</h3>
              <p>Atlanta · Buckhead · Alpharetta</p>
              <p>Sandy Springs · Roswell · Midtown</p>
            </div>
            <div className="contact-card">
              <h3>Concierge perks</h3>
              <p>Pickup & delivery, secure storage, and mobile coordination.</p>
            </div>
          </div>
        </div>
        <div className="map-placeholder reveal" role="img" aria-label="Map placeholder">
          <div>
            <h3>Studio Location</h3>
            <p>Map embed placeholder for your preferred provider.</p>
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="cta-inner reveal">
          <div>
            <p className="eyebrow">Immediate attention</p>
            <h2>Need a same-week detail?</h2>
            <p>
              Call the concierge line and we will prioritize your request based
              on availability.
            </p>
          </div>
          <a className="btn btn-primary" href="tel:+14045550198">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
