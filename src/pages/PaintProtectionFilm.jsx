import React from "react";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";

const PaintProtectionFilm = () => {
  return (
    <div className="page">
      <Section
        kicker="Paint Protection Film"
        title="Paint Protection Film"
        titleAs="h1"
        text="PPF is a clear, self-healing film that shields paint from road debris, UV exposure, and everyday wear. Ideal for enthusiasts and collectors who expect long-term preservation."
      />

      <Section title="Why PPF">
        <div className="grid">
          <Card
            title="Preserve resale value"
            text="Protects against chips, etching, and light scratches that diminish value."
          />
          <Card
            title="Self-healing clarity"
            text="Minor swirls disappear with heat, keeping the finish looking fresh."
          />
          <Card
            title="Hydrophobic topcoat"
            text="Water beads and contaminants rinse away more easily."
          />
        </div>
      </Section>

      <Section title="PPF Packages">
        <div className="stack">
          <Card title="Partial Front Protection">
            <ul className="bullet-list">
              <li>Partial hood and fenders</li>
              <li>Front bumper coverage</li>
              <li>Mirror caps</li>
              <li>Custom coverage available</li>
            </ul>
          </Card>
          <Card title="Full Front Protection">
            <ul className="bullet-list">
              <li>Full hood and fenders</li>
              <li>Front bumper</li>
              <li>Headlights and mirrors</li>
              <li>Custom coverage available</li>
            </ul>
          </Card>
          <Card title="Full Vehicle Protection">
            <ul className="bullet-list">
              <li>Full exterior coverage</li>
              <li>High-impact zones protected</li>
              <li>Gloss or satin finish options</li>
              <li>Custom coverage available</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Our Installation Process">
        <div className="process">
          <div className="process-step">
            <span>01</span>
            <h3>Vehicle inspection</h3>
            <p>We document paint condition and discuss coverage goals.</p>
          </div>
          <div className="process-step">
            <span>02</span>
            <h3>Paint preparation</h3>
            <p>Decontamination wash and refinement for a clean surface.</p>
          </div>
          <div className="process-step">
            <span>03</span>
            <h3>Precision film installation</h3>
            <p>Computer-cut templates and hand finishing for clean edges.</p>
          </div>
          <div className="process-step">
            <span>04</span>
            <h3>Final quality inspection</h3>
            <p>Controlled lighting review and delivery walkthrough.</p>
          </div>
        </div>
      </Section>

      <Section className="cta-block">
        <div className="cta-inner">
          <div>
            <h2>Ready to protect your finish?</h2>
            <p>We will recommend the right coverage for your vehicle.</p>
          </div>
          <Button to="/contact" variant="primary">
            Request a Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default PaintProtectionFilm;
