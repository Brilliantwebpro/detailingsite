import React from "react";
import { Link } from "react-router-dom";

const Program = () => {
  return (
    <div className="page">
      <section className="section hero-alt">
        <div className="section-head">
          <div>
            <p className="eyebrow">Partner program</p>
            <h1>Built for elite installers who want scale without compromise.</h1>
          </div>
          <p>
            Helios PPF Collective is a selective partnership for luxury
            detailers, high-end wrap shops, and boutique studios.
          </p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Concierge onboarding</h3>
            <p>White-glove onboarding with film spec guidance.</p>
            <ul>
              <li>Installer certification sprint</li>
              <li>Private ordering portal</li>
              <li>Dedicated technical advisor</li>
            </ul>
          </div>
          <div className="card">
            <h3>Dealer protection</h3>
            <p>Region-protected partnerships that preserve pricing.</p>
            <ul>
              <li>Market exclusivity windows</li>
              <li>MSRP alignment resources</li>
              <li>Lead sharing for approved areas</li>
            </ul>
          </div>
          <div className="card">
            <h3>Growth enablement</h3>
            <p>Tools that help you close premium clients faster.</p>
            <ul>
              <li>Client presentation decks</li>
              <li>Luxury service photography kit</li>
              <li>Luxury owner aftercare guides</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section highlight">
        <div className="section-head">
          <h2>Partnership tiers</h2>
          <p>Choose a tier aligned with your studio volume and ambitions.</p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Studio</h3>
            <p>For boutique shops installing 4-8 PPF vehicles monthly.</p>
            <span>Wholesale access + baseline training</span>
          </div>
          <div className="card">
            <h3>Premier</h3>
            <p>For established teams at 9-18 installs monthly.</p>
            <span>Priority supply + marketing kit</span>
          </div>
          <div className="card">
            <h3>Signature</h3>
            <p>For elite studios running high-volume luxury programs.</p>
            <span>Regional exclusivity + concierge dispatch</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Eligibility requirements</h2>
          <p>We approve partners who share a luxury-level service standard.</p>
        </div>
        <div className="results-grid">
          <div className="result">
            <h4>Portfolio review</h4>
            <p>Recent high-end installs showcasing edge finish quality.</p>
          </div>
          <div className="result">
            <h4>Facility standards</h4>
            <p>Controlled environment, lighting, and delivery experience.</p>
          </div>
          <div className="result">
            <h4>Team certifications</h4>
            <p>Commitment to Helios training and SOP adherence.</p>
          </div>
          <div className="result">
            <h4>Client care</h4>
            <p>White-glove handoff and documented aftercare process.</p>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <h2>Apply for partnership</h2>
            <p>
              Submit your studio details and we will respond within one business
              day with next steps.
            </p>
          </div>
          <Link to="/contact" className="primary">
            Start application
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Program;
