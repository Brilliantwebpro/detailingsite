import React from "react";
import { Link } from "react-router-dom";
import galleryGloss from "../assets/Detailing images/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-roof-orange-suv-car.jpg";
import galleryInterior from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import galleryCeramic from "../assets/Detailing images/car-wash-detailing-industry.jpg";

const CaseStudies = () => {
  return (
    <div className="page">
      <section className="section hero-alt">
        <div className="section-head">
          <div>
            <p className="eyebrow">Case studies</p>
            <h1>Studios scaling premium installs with Helios.</h1>
          </div>
          <p>
            Real partner outcomes from boutique shops and luxury fleets.
          </p>
        </div>
        <div className="results-grid">
          <div className="result">
            <h4>+38% average ticket</h4>
            <p>Premier partners increased PPF package pricing in 90 days.</p>
          </div>
          <div className="result">
            <h4>1.8x repeat rate</h4>
            <p>Annual gloss inspections drive client retention.</p>
          </div>
          <div className="result">
            <h4>48-hour supply turn</h4>
            <p>Concierge re-stock keeps installs on schedule.</p>
          </div>
          <div className="result">
            <h4>4.9 client rating</h4>
            <p>Luxury aftercare kits elevate the handoff experience.</p>
          </div>
        </div>
      </section>

      <section className="section work">
        <div className="section-head">
          <h2>Recent installs</h2>
          <p>Signature installs built for collectors and supercars.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryGloss})` }}
            />
            <div className="gallery-meta">
              <h4>Ferrari Roma</h4>
              <p>Full wrap with custom edge finish.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryInterior})` }}
            />
            <div className="gallery-meta">
              <h4>Range Rover SV</h4>
              <p>Full front + ceramic over PPF.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryCeramic})` }}
            />
            <div className="gallery-meta">
              <h4>Porsche GT3 RS</h4>
              <p>Track shield package with matte accents.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlight">
        <div className="section-head">
          <h2>Partner voices</h2>
          <p>Elite installers share the impact on their business.</p>
        </div>
        <div className="review-grid">
          <div className="review">
            <p>
              "Helios helped us standardize our installs and add premium
              add-ons. Clients love the aftercare kits."
            </p>
            <span>- Vale Studio, Miami</span>
          </div>
          <div className="review">
            <p>
              "Templates cut our install time by 25% while keeping edges clean."
            </p>
            <span>- LuxShield Auto, Beverly Hills</span>
          </div>
          <div className="review">
            <p>
              "Their support team feels like an extension of our shop."
            </p>
            <span>- Apex Collective, Atlanta</span>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <h2>Want results like this?</h2>
            <p>Apply to the Helios partner program today.</p>
          </div>
          <Link to="/contact" className="primary">
            Request access
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
