import React, { useState } from "react";
import Section from "../components/Section.jsx";
import ImageGrid from "../components/ImageGrid.jsx";
import Button from "../components/Button.jsx";
import galleryGloss from "../assets/Detailing images/car-detailing-concept-man-face-mask-with-orbital-polisher-repair-shop-polishing-roof-orange-suv-car.jpg";
import galleryInterior from "../assets/Detailing images/beautiful-car-interior-clean-up-service.jpg";
import galleryCeramic from "../assets/Detailing images/car-wash-detailing-industry.jpg";
import beforeShot from "../assets/Detailing images/car-wash-detailing-station (2).jpg";
import afterShot from "../assets/Detailing images/car-wash-detailing-industry.jpg";

const OurWork = () => {
  const [sliderValue, setSliderValue] = useState(55);
  const images = [
    { src: galleryGloss, label: "Precision edges" },
    { src: galleryInterior, label: "Interior touchpoints" },
    { src: galleryCeramic, label: "Full vehicle wrap" },
    { src: galleryGloss, label: "Mirror caps" },
    { src: galleryInterior, label: "Console protection" },
    { src: galleryCeramic, label: "High-gloss finish" },
  ];

  return (
    <div className="page">
      <Section
        title="Our Work"
        titleAs="h1"
        text="Every installation is tailored. No two vehicles are the same."
      />

      <Section title="Installation Gallery">
        <ImageGrid images={images} />
      </Section>

      <Section title="Before / After">
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
      </Section>

      <Section className="cta-block">
        <div className="cta-inner">
          <div>
            <h2>See your vehicle in our studio.</h2>
            <p>Book a consultation and we will map the right coverage.</p>
          </div>
          <Button to="/contact" variant="primary">
            Request Consultation
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default OurWork;
