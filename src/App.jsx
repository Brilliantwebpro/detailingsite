import React, { useState } from "react";
import heroDetail from "./assets/Detailing images/hands-professional-car-service-worker-with-orbital-polisher-polishing-yellow-luxury-car-hood_769609-816.avif";
import galleryGloss from "./assets/Detailing images/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-roof-orange-suv-car.jpg";
import galleryInterior from "./assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import galleryCeramic from "./assets/Detailing images/car-wash-detailing-industry.jpg";
import beforeShot from "./assets/Detailing images/car-wash-detailing-station (2).jpg";
import afterShot from "./assets/Detailing images/car-wash-detailing-industry.jpg";

const App = () => {
  const [sliderValue, setSliderValue] = useState(60);
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    vehicleType: "Sedan",
    service: "Essential Interior & Exterior Detail",
    addOns: ["Engine Bay Cleaning"],
    date: "",
    time: "10:00 AM",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const toggleAddOn = (label) => {
    setBooking((prev) => {
      const has = prev.addOns.includes(label);
      const addOns = has
        ? prev.addOns.filter((item) => item !== label)
        : [...prev.addOns, label];
      return { ...prev, addOns };
    });
  };

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Apex Auto Detailing</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#results">Results</a>
            <a href="#reviews">Reviews</a>
            <a href="#booking" className="cta">
              Book Now
            </a>
          </div>
        </nav>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Luxury mobile detailing</p>
            <h1>
              Your car.
              <br />
              Our obsession.
            </h1>
            <p className="subhead">
              High-end detailing, ceramic coatings, and paint correction with a
              five-star, white-glove experience.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="primary">
                Get a Free Quote
              </a>
              <a href="#services" className="secondary">
                View Packages
              </a>
            </div>
            <div className="trust">
              <div>
                <span>5.0</span> Average Rating
              </div>
              <div>
                <span>1,200+</span> Vehicles Detailed
              </div>
              <div>
                <span>24hr</span> Turnaround Options
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glass">
              <div className="stat">
                <span>98%</span>
                <p>Gloss retention after 12 months</p>
              </div>
              <div className="stat">
                <span>3-7 yr</span>
                <p>Ceramic protection options</p>
              </div>
              <div className="stat">
                <span>4 hrs</span>
                <p>Average full detail</p>
              </div>
            </div>
            <div className="hero-highlight">
              <span>Showroom Finish</span>
              <p>Every panel refined by hand.</p>
            </div>
            <div
              className="hero-image"
              style={{ backgroundImage: `url(${heroDetail})` }}
            >
              <div className="hero-image-label">Porsche 911 · 2-Step Polish</div>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="section services">
        <div className="section-head">
          <h2>Main Detailing Packages</h2>
          <p>
            Choose a core package, then add paint protection or specialty
            services.
          </p>
        </div>
        <div className="grid">
          <div className="card">
            <div className="card-badge">Most Popular</div>
            <h3>Essential Interior & Exterior Detail</h3>
            <p>Perfect maintenance detail for daily drivers.</p>
            <ul>
              <li>Hand wash + wheels</li>
              <li>Interior wipe down</li>
              <li>Glass + trim care</li>
            </ul>
            <span>Starting at $189</span>
          </div>
          <div className="card">
            <h3>Complete Interior & Exterior Detail</h3>
            <p>Deep clean with extra attention to paint and interior.</p>
            <ul>
              <li>Full interior detail</li>
              <li>Decontamination wash</li>
              <li>Sealant protection</li>
            </ul>
            <span>Starting at $279</span>
          </div>
          <div className="card">
            <h3>Ultimate Interior & Exterior Detail</h3>
            <p>Complete reset with premium finish and protection.</p>
            <ul>
              <li>Full interior extraction</li>
              <li>Paint enhancement polish</li>
              <li>Long-lasting protection</li>
            </ul>
            <span>Starting at $389</span>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="section-head">
          <h2>Paint Protection & Specialty Services</h2>
          <p>Extend gloss, protect against damage, and restore clarity.</p>
        </div>
        <div className="grid">
          <div className="card">
            <h3>Ceramic Coating</h3>
            <p>Long-term protection with incredible depth and hydrophobics.</p>
            <span>From $699</span>
          </div>
          <div className="card">
            <h3>Ceramic Spray Sealant</h3>
            <p>Boost gloss and protection between full services.</p>
            <span>From $89</span>
          </div>
          <div className="card">
            <h3>Wax / Paint Sealant</h3>
            <p>Classic shine and short-term protection.</p>
            <span>From $79</span>
          </div>
          <div className="card">
            <h3>Clay Bar Treatment</h3>
            <p>Remove embedded contaminants for a smooth finish.</p>
            <span>From $59</span>
          </div>
          <div className="card">
            <h3>Headlight Restoration</h3>
            <p>Restore clarity and safety to oxidized lenses.</p>
            <span>From $69</span>
          </div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head">
          <h2>Transformation Gallery</h2>
          <p>Proof you can see. Quality you can feel.</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryGloss})` }}
            />
            <div className="gallery-meta">
              <h4>Gloss Restoration</h4>
              <p>Deep cut + polish on black paint.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryInterior})` }}
            />
            <div className="gallery-meta">
              <h4>Interior Revival</h4>
              <p>Steam, extraction, and leather care.</p>
            </div>
          </div>
          <div className="gallery-card">
            <div
              className="gallery-image"
              style={{ backgroundImage: `url(${galleryCeramic})` }}
            />
            <div className="gallery-meta">
              <h4>Ceramic Shield</h4>
              <p>Hydrophobic protection and gloss.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="section results">
        <div className="section-head">
          <h2>Why Drivers Choose Us</h2>
          <p>Premium finish, transparent pricing, and mobile convenience.</p>
        </div>
        <div className="results-grid">
          <div className="result">
            <h4>Mobile Convenience</h4>
            <p>We come to your home or office with a full luxury setup.</p>
          </div>
          <div className="result">
            <h4>Detailing Artisans</h4>
            <p>Certified techs with concours-level training.</p>
          </div>
          <div className="result">
            <h4>Flexible Scheduling</h4>
            <p>Same-week bookings with 24-hour express upgrades.</p>
          </div>
          <div className="result">
            <h4>Concierge Care</h4>
            <p>White-glove handoff and maintenance plan.</p>
          </div>
        </div>
      </section>

      <section className="section comparison">
        <div className="section-head">
          <h2>Before & After</h2>
          <p>Slide to see the difference in clarity and gloss.</p>
        </div>
        <div className="compare-card">
          <div className="compare-image">
            <div
              className="compare-before"
              style={{ backgroundImage: `url(${beforeShot})` }}
            >
              Before
            </div>
            <div
              className="compare-after"
              style={{
                width: `${sliderValue}%`,
                backgroundImage: `url(${afterShot})`,
              }}
            >
              <span>After</span>
            </div>
          </div>
          <input
            className="compare-slider"
            type="range"
            min="10"
            max="90"
            value={sliderValue}
            onChange={(event) => setSliderValue(event.target.value)}
          />
        </div>
      </section>

      <section id="reviews" className="section reviews">
        <div className="section-head">
          <h2>Client Love</h2>
          <p>Drivers trust Apex for a finish that lasts.</p>
        </div>
        <div className="review-grid">
          <div className="review">
            <p>
              "My SUV looked better than the day I bought it. The attention to
              detail was insane."
            </p>
            <span>- Jordan M.</span>
          </div>
          <div className="review">
            <p>
              "Ceramic coating is flawless. Water just beads off now. Highly
              recommend."
            </p>
            <span>- Priya S.</span>
          </div>
          <div className="review">
            <p>
              "Professional, punctual, and the interior smells brand new.
              Worth every dollar."
            </p>
            <span>- Carlos T.</span>
          </div>
        </div>
      </section>

      <section id="booking" className="section booking">
        <div className="booking-content">
          <h2>Ready for a flawless finish?</h2>
          <p>
            Book a free consult and get a custom detailing plan within 24
            hours.
          </p>
          <div className="hero-actions">
            <button className="primary">Schedule Now</button>
            <button className="secondary">Call (555) 246-9870</button>
          </div>
        </div>
        <div className="booking-wizard">
          <div className="wizard-steps">
            <span className={step === 1 ? "active" : ""}>1</span>
            <span className={step === 2 ? "active" : ""}>2</span>
            <span className={step === 3 ? "active" : ""}>3</span>
          </div>

          {step === 1 && (
            <div className="wizard-panel">
              <h3>Vehicle + Package</h3>
              <div className="wizard-grid">
                <div>
                  <label>Vehicle Type</label>
                  <div className="pill-row">
                    {["Sedan", "SUV", "Truck", "Coupe"].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={
                          booking.vehicleType === label ? "pill active" : "pill"
                        }
                        onClick={() =>
                          setBooking((prev) => ({
                            ...prev,
                            vehicleType: label,
                          }))
                        }
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label>Package</label>
                  <div className="select-card">
                    {[
                      "Essential Interior & Exterior Detail",
                      "Complete Interior & Exterior Detail",
                      "Ultimate Interior & Exterior Detail",
                    ].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={
                          booking.service === label ? "card active" : "card"
                        }
                        onClick={() =>
                          setBooking((prev) => ({ ...prev, service: label }))
                        }
                      >
                        <span>{label}</span>
                        <p>Tailored to your finish and usage.</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="wizard-actions">
                <button className="primary" onClick={() => setStep(2)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="wizard-panel">
              <h3>Add-ons + Schedule</h3>
              <div className="wizard-grid">
                <div>
                  <label>Add-ons</label>
                  <div className="addon-grid">
                    {[
                      "Engine Bay Cleaning",
                      "Pet Hair Removal",
                      "Odor Treatment",
                      "Ceramic Coating",
                      "Ceramic Spray Sealant",
                      "Wax / Paint Sealant",
                      "Clay Bar Treatment",
                      "Headlight Restoration",
                    ].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={
                          booking.addOns.includes(label)
                            ? "addon active"
                            : "addon"
                        }
                        onClick={() => toggleAddOn(label)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    value={booking.date}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        date: event.target.value,
                      }))
                    }
                  />
                  <label>Preferred Time</label>
                  <select
                    value={booking.time}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        time: event.target.value,
                      }))
                    }
                  >
                    <option>8:00 AM</option>
                    <option>10:00 AM</option>
                    <option>1:00 PM</option>
                    <option>3:30 PM</option>
                  </select>
                </div>
              </div>
              <div className="wizard-actions">
                <button className="secondary" onClick={() => setStep(1)}>
                  Back
                </button>
                <button className="primary" onClick={() => setStep(3)}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="wizard-panel">
              <h3>Your Details</h3>
              <div className="wizard-grid">
                <div>
                  <label>Full Name</label>
                  <input
                    placeholder="Alex Morgan"
                    value={booking.name}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                  />
                  <label>Phone</label>
                  <input
                    placeholder="(555) 123-9876"
                    value={booking.phone}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                  />
                  <label>Email</label>
                  <input
                    placeholder="you@example.com"
                    value={booking.email}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label>Notes</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your goals."
                    value={booking.notes}
                    onChange={(event) =>
                      setBooking((prev) => ({
                        ...prev,
                        notes: event.target.value,
                      }))
                    }
                  />
                  <div className="summary-card">
                    <h4>Summary</h4>
                    <p>{booking.vehicleType}</p>
                    <p>{booking.service}</p>
                    <p>
                      {booking.addOns.length
                        ? booking.addOns.join(", ")
                        : "No add-ons"}
                    </p>
                    <p>
                      {booking.date ? booking.date : "Select a date"} ·{" "}
                      {booking.time}
                    </p>
                  </div>
                </div>
              </div>
              <div className="wizard-actions">
                <button className="secondary" onClick={() => setStep(2)}>
                  Back
                </button>
                <button className="primary" type="button">
                  Request My Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <strong>Apex Auto Detailing</strong>
          <p>Luxury mobile detailing across the city.</p>
          <div className="footer-badges">
            <span>5-Star Rated</span>
            <span>Insured</span>
            <span>Mobile Service</span>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h5>Services</h5>
            <a href="#services">Packages</a>
            <a href="#results">Why Us</a>
            <a href="#work">Gallery</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#reviews">Reviews</a>
            <a href="#booking">Book Now</a>
            <a href="#booking">Get Quote</a>
          </div>
        </div>
        <div className="footer-contact">
          <h5>Contact</h5>
          <p>Mon-Sat · 8am-7pm</p>
          <p>(555) 246-9870</p>
          <p>apexdetail@example.com</p>
        </div>
      </footer>

      <style>{`
        :root {
          --bg: #07090d;
          --panel: #0f141c;
          --accent: #f04d23;
          --accent-soft: #ff9056;
          --text: #f7f7f7;
          --muted: #b6c0d4;
          --stroke: rgba(255, 255, 255, 0.08);
          --glass: rgba(12, 16, 23, 0.7);
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Sora", "Space Grotesk", sans-serif;
          background: var(--bg);
          color: var(--text);
        }
        .page {
          background: radial-gradient(circle at top, #1a1f2b, #07090d 60%);
        }
        .hero {
          padding: 48px 8vw 96px;
          position: relative;
          overflow: hidden;
        }
        .hero-content,
        .hero-visual {
          animation: fadeInUp 0.8s ease both;
        }
        .hero-visual {
          animation-delay: 0.1s;
        }
        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 144, 86, 0.35),
            transparent 60%
          );
          filter: blur(20px);
          opacity: 0.6;
        }
        .hero::before {
          top: -180px;
          right: -120px;
        }
        .hero::after {
          bottom: -200px;
          left: -140px;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 2;
        }
        .logo {
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .nav-links a {
          color: var(--muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        .nav-links .cta {
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nav-links .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(240, 77, 35, 0.35);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          align-items: center;
          margin-top: 80px;
          position: relative;
          z-index: 2;
        }
        .hero-content {
          max-width: 560px;
        }
        .eyebrow {
          color: var(--accent-soft);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
        }
        h1 {
          font-size: 56px;
          margin: 12px 0 18px;
        }
        .subhead {
          font-size: 18px;
          color: var(--muted);
          line-height: 1.6;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin: 28px 0 32px;
          flex-wrap: wrap;
        }
        .primary,
        .secondary {
          border: none;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }
        .primary {
          background: var(--accent);
          color: #fff;
          box-shadow: 0 18px 30px rgba(240, 77, 35, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 36px rgba(240, 77, 35, 0.45);
        }
        .secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid #2b3547;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .secondary:hover {
          border-color: var(--accent-soft);
          transform: translateY(-2px);
        }
        .trust {
          display: flex;
          gap: 24px;
          color: var(--muted);
          flex-wrap: wrap;
        }
        .trust span {
          color: var(--text);
          font-weight: 600;
          margin-right: 6px;
        }
        .hero-visual {
          display: grid;
          gap: 20px;
        }
        .hero-glass {
          background: var(--glass);
          border: 1px solid var(--stroke);
          padding: 24px;
          border-radius: 20px;
          backdrop-filter: blur(14px);
          display: grid;
          gap: 18px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .hero-glass:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .stat span {
          font-weight: 700;
          font-size: 20px;
        }
        .stat p {
          margin: 6px 0 0;
          color: var(--muted);
        }
        .hero-highlight {
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(135deg, #f04d23, #ff9056);
          color: #1b0a04;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hero-highlight:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 28px rgba(240, 77, 35, 0.4);
        }
        .hero-highlight p {
          margin: 8px 0 0;
          font-weight: 400;
        }
        .hero-image {
          height: 220px;
          border-radius: 22px;
          background-size: cover;
          background-position: center;
          border: 1px solid var(--stroke);
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-image:hover {
          transform: scale(1.02);
          box-shadow: 0 18px 32px rgba(0, 0, 0, 0.45);
        }
        .hero-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
              circle at 20% 20%,
              rgba(255, 255, 255, 0.18),
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(255, 144, 86, 0.35),
              transparent 55%
            );
          opacity: 0.9;
        }
        .hero-image-label {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(10, 14, 20, 0.65);
          border: 1px solid var(--stroke);
          font-size: 12px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }
        .section {
          padding: 72px 8vw;
        }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          margin-bottom: 36px;
        }
        .section-head p {
          color: var(--muted);
          max-width: 420px;
        }
        .grid,
        .review-grid,
        .results-grid,
        .gallery-grid {
          display: grid;
          gap: 20px;
        }
        .grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        .card,
        .review,
        .work-card,
        .result {
          background: var(--panel);
          padding: 24px;
          border-radius: 18px;
          border: 1px solid #1b2331;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .card:hover,
        .review:hover,
        .result:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .card {
          position: relative;
        }
        .card ul {
          padding-left: 18px;
          color: var(--muted);
          margin: 16px 0 0;
        }
        .card-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(240, 77, 35, 0.2);
          color: var(--accent-soft);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .card span {
          display: block;
          margin-top: 18px;
          color: var(--accent-soft);
          font-weight: 600;
        }
        .gallery-grid {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }
        .gallery-card {
          background: var(--panel);
          border-radius: 18px;
          border: 1px solid #1b2331;
          overflow: hidden;
          display: grid;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .gallery-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .gallery-image {
          height: 180px;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-meta {
          padding: 18px 20px 22px;
        }
        .gallery-meta p {
          margin: 6px 0 0;
          color: var(--muted);
        }
        .results {
          background: #0b0f16;
        }
        .results-grid {
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .result h4 {
          margin-top: 0;
        }
        .result p {
          color: var(--muted);
        }
        .reviews {
          background: #0b0f16;
        }
        .review p {
          color: var(--muted);
        }
        .comparison {
          background: #0b0f16;
        }
        .compare-card {
          background: var(--panel);
          border: 1px solid #1b2331;
          border-radius: 20px;
          padding: 24px;
          display: grid;
          gap: 20px;
          transition: border-color 0.25s ease;
        }
        .compare-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .compare-image {
          position: relative;
          height: 280px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a202b, #0b0f16);
        }
        .compare-before,
        .compare-after {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 16px;
          font-weight: 600;
          background-size: cover;
          background-position: center;
        }
        .compare-before {
          color: #9aa3b2;
        }
        .compare-after {
          border-right: 2px solid var(--accent-soft);
        }
        .compare-after span {
          background: rgba(10, 14, 20, 0.6);
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid var(--stroke);
        }
        .compare-slider {
          width: 100%;
        }
        .booking {
          background: linear-gradient(120deg, #f04d23, #ff9056);
          color: #1b0a04;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .booking .secondary {
          border-color: rgba(0, 0, 0, 0.2);
        }
        .booking-wizard {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          padding: 24px;
          display: grid;
          gap: 18px;
          color: #1b0a04;
          width: 100%;
        }
        .wizard-steps {
          display: flex;
          gap: 10px;
        }
        .wizard-steps span {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.35);
          font-weight: 700;
        }
        .wizard-steps .active {
          background: #1b0a04;
          color: #fff;
        }
        .wizard-panel h3 {
          margin-top: 0;
        }
        .wizard-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }
        .wizard-panel label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 14px 0 6px;
        }
        .wizard-panel input,
        .wizard-panel select,
        .wizard-panel textarea {
          width: 100%;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 10px 12px;
          font-family: inherit;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .wizard-panel input:focus,
        .wizard-panel select:focus,
        .wizard-panel textarea:focus {
          outline: none;
          border-color: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 0 3px rgba(240, 77, 35, 0.25);
        }
        .pill-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pill {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
        }
        .pill.active {
          background: #1b0a04;
          color: #fff;
        }
        .select-card {
          display: grid;
          gap: 10px;
        }
        .select-card .card {
          text-align: left;
          background: rgba(255, 255, 255, 0.35);
          border: 1px solid rgba(0, 0, 0, 0.2);
        }
        .select-card .card.active {
          background: #1b0a04;
          color: #fff;
          border-color: rgba(0, 0, 0, 0.4);
        }
        .select-card .card p {
          margin: 6px 0 0;
          opacity: 0.7;
        }
        .addon-grid {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        }
        .addon {
          border-radius: 12px;
          padding: 10px 12px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
        }
        .addon.active {
          background: #1b0a04;
          color: #fff;
        }
        .summary-card {
          margin-top: 16px;
          padding: 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.3);
        }
        .summary-card h4 {
          margin: 0 0 8px;
        }
        .wizard-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .footer {
          padding: 48px 8vw;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 28px;
          color: var(--muted);
          border-top: 1px solid #1b2331;
          background: #080b11;
        }
        .footer strong {
          font-size: 18px;
          color: var(--text);
        }
        .footer h5 {
          margin: 0 0 10px;
          color: var(--text);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 12px;
        }
        .footer a {
          display: block;
          color: var(--muted);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.2s ease;
        }
        .footer a:hover {
          color: var(--accent-soft);
        }
        .footer-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }
        .footer-badges span {
          border: 1px solid var(--stroke);
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          color: var(--text);
        }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          h1 {
            font-size: 40px;
          }
          .section-head {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
