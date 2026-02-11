import React from "react";
import Button from "../components/Button.jsx";
import servicesHero from "../assets/Detailing images/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-roof-orange-suv-car.jpg";
import correctionImage from "../assets/Detailing images/hands-professional-car-service-worker-with-orbital-polisher-polishing-yellow-luxury-car-hood_769609-816.avif";
import ceramicImage from "../assets/Detailing images/car-wash-detailing-industry.jpg";
import interiorImage from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import membershipImage from "../assets/Detailing images/XXL_height.webp";

const Services = () => {
  return (
    <div className="page">
      <section
        className="hero hero-inner parallax"
        style={{ "--hero-image": `url(${servicesHero})` }}
      >
        <div className="hero-content reveal">
          <p className="eyebrow">Services</p>
          <h1>Precision detailing with a luxury finish.</h1>
          <p className="subhead">
            Every service is delivered with studio-grade prep, curated products,
            and an obsessive eye for detail.
          </p>
          <div className="hero-actions">
            <Button to="/contact" variant="primary">
              Request a Booking
            </Button>
            <Button to="/about" variant="secondary">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      <section className="section service-block reveal">
        <div className="service-media" style={{ "--service-image": `url(${correctionImage})` }}>
          <span>Signature Correction</span>
        </div>
        <div className="service-content">
          <p className="eyebrow">Paint correction</p>
          <h2>Signature Correction Detail</h2>
          <p>
            A multi-stage correction process designed to eliminate swirls,
            oxidation, and holograms. We restore depth and clarity before
            protection is applied.
          </p>
          <ul className="bullet-list">
            <li>Paint-safe decontamination and clay treatment</li>
            <li>Two-stage correction with gloss refinement</li>
            <li>Detail lighting inspection and finish report</li>
          </ul>
          <div className="service-cta">
            <Button to="/contact" variant="primary">
              Book Correction Detail
            </Button>
            <span>Recommended for luxury and performance vehicles.</span>
          </div>
        </div>
      </section>

      <section className="section service-block reverse reveal">
        <div className="service-media" style={{ "--service-image": `url(${ceramicImage})` }}>
          <span>Ceramic Protection</span>
        </div>
        <div className="service-content">
          <p className="eyebrow">Long-term protection</p>
          <h2>Ceramic Coating & Paint Protection</h2>
          <p>
            High-solids ceramic coatings deliver unmatched gloss depth and
            hydrophobic protection. Optional multi-layer systems available for
            collectors.
          </p>
          <ul className="bullet-list">
            <li>2-7 year protection plans</li>
            <li>Water-repellent, UV-resistant finish</li>
            <li>Wheel, glass, and trim coating options</li>
          </ul>
          <div className="service-cta">
            <Button to="/contact" variant="primary">
              Reserve Ceramic Package
            </Button>
            <span>Ideal for daily drivers and garage-kept vehicles.</span>
          </div>
        </div>
      </section>

      <section className="section service-block reveal">
        <div className="service-media" style={{ "--service-image": `url(${interiorImage})` }}>
          <span>Interior Rejuvenation</span>
        </div>
        <div className="service-content">
          <p className="eyebrow">Interior care</p>
          <h2>Interior Restoration & Leather Care</h2>
          <p>
            A premium interior reset with steam extraction, leather conditioning,
            and precision cleaning for soft-touch and piano-black surfaces.
          </p>
          <ul className="bullet-list">
            <li>Luxury leather and Alcantara-safe methods</li>
            <li>Odor neutralization and cabin air refresh</li>
            <li>Trim restoration with UV protection</li>
          </ul>
          <div className="service-cta">
            <Button to="/contact" variant="primary">
              Schedule Interior Service
            </Button>
            <span>Perfect for executive interiors and family vehicles.</span>
          </div>
        </div>
      </section>

      <section className="section service-block reverse reveal">
        <div className="service-media" style={{ "--service-image": `url(${membershipImage})` }}>
          <span>Concierge Membership</span>
        </div>
        <div className="service-content">
          <p className="eyebrow">Private membership</p>
          <h2>Executive Maintenance Membership</h2>
          <p>
            A curated service cadence with priority scheduling, seasonal storage
            prep, and ongoing gloss inspections.
          </p>
          <ul className="bullet-list">
            <li>Monthly or quarterly detail appointments</li>
            <li>Priority booking windows and secure storage</li>
            <li>Dedicated concierge and vehicle tracking</li>
          </ul>
          <div className="service-cta">
            <Button to="/contact" variant="primary">
              Request Membership
            </Button>
            <span>Invitation-only for a limited number of clients.</span>
          </div>
        </div>
      </section>

      <section className="section benefits reveal">
        <div className="section-head">
          <div>
            <p className="eyebrow">Benefits</p>
            <h2>Why high-end owners choose Abrams.</h2>
          </div>
          <p>
            We focus on quality over volume and deliver a boutique experience at
            every touchpoint.
          </p>
        </div>
        <div className="benefits-grid">
          <div className="glass-card">
            <h3>Luxury-grade materials</h3>
            <p>We use certified products approved for premium finishes.</p>
          </div>
          <div className="glass-card">
            <h3>Trusted technicians</h3>
            <p>Trained specialists with experience on exotic vehicles.</p>
          </div>
          <div className="glass-card">
            <h3>Concierge scheduling</h3>
            <p>White-glove coordination from pickup to delivery.</p>
          </div>
        </div>
      </section>

      <section className="section cta-block">
        <div className="cta-inner reveal">
          <div>
            <p className="eyebrow">Ready to begin?</p>
            <h2>Receive a tailored service plan within 24 hours.</h2>
            <p>
              Send us your vehicle details and preferred timeline. We will build
              a bespoke plan with pricing and availability.
            </p>
          </div>
          <Button to="/contact" variant="primary">
            Start a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
