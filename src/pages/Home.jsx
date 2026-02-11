import React, { useState } from "react";
import Button from "../components/Button.jsx";
import heroImage from "../assets/Detailing images/car-wash-detailing-station (2).jpg";
import beforeImage from "../assets/Detailing images/360_F_397247724_XCpf2rqFdYkQ5NTW0ZkSA4dlQLY2eOv2.jpg";
import afterImage from "../assets/Detailing images/b123f2db953c07d2c5f088b0e4ae9f38.jpg";

const Home = () => {
  const [split, setSplit] = useState(52);

  return (
    <div className="page">
      <section
        className="hero hero-home parallax"
        style={{ "--hero-image": `url(${heroImage})` }}
      >
        <div className="hero-content reveal">
          <p className="eyebrow">Abrams Auto Detailing LLC</p>
          <h1>Luxury auto detailing crafted for vehicles that lead the room.</h1>
          <p className="subhead">
            Precision paint correction, ceramic protection, and interior
            rejuvenation for owners who expect a concierge-level experience.
          </p>
          <div className="hero-actions">
            <Button to="/contact" variant="primary">
              Schedule a Consultation
            </Button>
            <Button to="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className="hero-pill-group">
            <div className="hero-pill">Concierge Pickup & Delivery</div>
            <div className="hero-pill">Climate-Controlled Studio</div>
            <div className="hero-pill">Paint-Safe, pH-Balanced</div>
          </div>
        </div>
      </section>

      <section className="section counter-strip">
        <div className="counter-card reveal">
          <span className="counter" data-target="1200" data-suffix="+">
            0
          </span>
          <p>Vehicles detailed with white-glove delivery</p>
        </div>
        <div className="counter-card reveal">
          <span className="counter" data-target="12" data-suffix="+">
            0
          </span>
          <p>Years refining luxury finishes</p>
        </div>
        <div className="counter-card reveal">
          <span className="counter" data-target="98" data-suffix="%">
            0
          </span>
          <p>Repeat clientele and referral rate</p>
        </div>
        <div className="counter-card reveal">
          <span className="counter" data-target="4" data-suffix=" hours">
            0
          </span>
          <p>Average response time for concierge bookings</p>
        </div>
      </section>

      <div className="soft-divider" />

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Signature services</p>
            <h2>Modern protection with a luxury finish.</h2>
          </div>
          <p>
            Each service is customized after a consultation, vehicle inspection,
            and a finish assessment. The result is a tailored plan that preserves
            value and elevates presence.
          </p>
        </div>
        <div className="grid">
          <article className="glass-card reveal">
            <h3>Signature Correction Detail</h3>
            <p>
              Multi-stage paint correction, gloss refinement, and swirl removal
              for a flawless finish under studio lighting.
            </p>
            <span className="card-tag">Most requested</span>
          </article>
          <article className="glass-card reveal">
            <h3>Ceramic Coating & Protection</h3>
            <p>
              Hydrophobic ceramic layers with an ultra-deep gloss that resists UV
              exposure, water spotting, and contaminants.
            </p>
            <span className="card-tag">2-7 year options</span>
          </article>
          <article className="glass-card reveal">
            <h3>Interior Rejuvenation</h3>
            <p>
              Leather conditioning, trim restoration, ozone neutralization, and
              soft-touch protection for cabin surfaces.
            </p>
            <span className="card-tag">Luxury materials safe</span>
          </article>
          <article className="glass-card reveal">
            <h3>Executive Maintenance</h3>
            <p>
              Private membership with scheduled detailing, priority booking, and
              secure storage options for seasonal vehicles.
            </p>
            <span className="card-tag">Membership tiers</span>
          </article>
        </div>
        <div className="section-cta">
          <Button to="/services" variant="secondary">
            View Full Services
          </Button>
        </div>
      </section>

      <section className="section why-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Premium detailing, tailored for elite vehicles.</h2>
          </div>
          <p>
            We combine controlled environments, refined products, and dedicated
            craftsmanship to deliver a level of finish mobile detailers simply
            cannot match.
          </p>
        </div>
        <div className="icon-grid">
          <div className="icon-card reveal">
            <span className="icon">◆</span>
            <h3>Private studio</h3>
            <p>Climate-controlled bay with curated lighting.</p>
          </div>
          <div className="icon-card reveal">
            <span className="icon">◆</span>
            <h3>Elite materials</h3>
            <p>Paint-safe, pH-neutral, and ceramic certified.</p>
          </div>
          <div className="icon-card reveal">
            <span className="icon">◆</span>
            <h3>Concierge care</h3>
            <p>Pickup, delivery, and white-glove handoff.</p>
          </div>
          <div className="icon-card reveal">
            <span className="icon">◆</span>
            <h3>Detail assurance</h3>
            <p>Final inspection reports and finish walkthroughs.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Before & after</p>
            <h2>See the finish transformation.</h2>
          </div>
          <p>
            Slide to reveal how our paint correction and protection process
            restores depth, clarity, and gloss.
          </p>
        </div>
        <div className="compare-card reveal">
          <div
            className="compare"
            style={{
              "--split": `${split}%`,
              "--before-image": `url(${beforeImage})`,
              "--after-image": `url(${afterImage})`,
            }}
          >
            <div className="compare-layer compare-before" />
            <div className="compare-layer compare-after" />
            <div className="compare-handle" aria-hidden="true" />
          </div>
          <label className="sr-only" htmlFor="compare-range">
            Reveal after detailing
          </label>
          <input
            id="compare-range"
            className="compare-range"
            type="range"
            min="10"
            max="90"
            value={split}
            onChange={(event) => setSplit(event.target.value)}
            aria-label="Reveal after detailing"
          />
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-head">
          <div>
            <p className="eyebrow">Client results</p>
            <h2>Trusted by collectors, executives, and enthusiasts.</h2>
          </div>
          <p>
            We partner with owners who demand concierge service, transparency,
            and a finish that impresses under any light.
          </p>
        </div>
        <div className="grid">
          <article className="testimonial-card reveal">
            <p>
              “The finish was beyond showroom. The team walked me through every
              stage and delivered the vehicle wrapped and protected.”
            </p>
            <span>— Morgan T., McLaren 720S</span>
          </article>
          <article className="testimonial-card reveal">
            <p>
              “My daily driver looks brand new again. The interior treatment and
              ceramic package were worth every dollar.”
            </p>
            <span>— Alexis R., Range Rover Autobiography</span>
          </article>
          <article className="testimonial-card reveal">
            <p>
              “Their concierge process feels like a private club. Picked up on
              time, delivered spotless, with a final inspection report.”
            </p>
            <span>— James K., Porsche Taycan Turbo S</span>
          </article>
        </div>
      </section>

      <section className="section cta-block">
        <div className="cta-inner reveal">
          <div>
            <p className="eyebrow">Ready for a bespoke detail?</p>
            <h2>Experience a finish that turns heads and preserves value.</h2>
            <p>
              Book a consultation to receive a tailored service plan, timeline,
              and pricing recommendation.
            </p>
          </div>
          <Button to="/contact" variant="primary">
            Start Your Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
