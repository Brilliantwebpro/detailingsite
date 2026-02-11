import React from "react";
import Button from "./Button.jsx";

const ContactForm = () => {
  return (
    <form className="form-card">
      <div className="form-row">
        <div>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" placeholder="Jordan Ellis" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" placeholder="(404) 555-0123" />
        </div>
      </div>

      <div className="form-row">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="vehicle">Vehicle</label>
          <input id="vehicle" name="vehicle" placeholder="Mercedes G63" />
        </div>
      </div>

      <label htmlFor="interest">Service Interest</label>
      <select id="interest" name="interest">
        <option>Signature Correction Detail</option>
        <option>Ceramic Coating & Paint Protection</option>
        <option>Interior Restoration & Leather Care</option>
        <option>Executive Maintenance Membership</option>
        <option>Concierge Pickup & Delivery</option>
      </select>

      <div className="form-row">
        <div>
          <label htmlFor="date">Preferred Date</label>
          <input id="date" name="date" type="date" />
        </div>
        <div>
          <label htmlFor="location">Service Location</label>
          <input id="location" name="location" placeholder="Garage, showroom, or residential" />
        </div>
      </div>

      <label htmlFor="message">Tell us about your goals</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Desired finish, timing, special requests, or concerns."
      />

      <Button variant="primary" type="submit">
        Request Booking
      </Button>
      <p className="form-note">
        We respond within one business day. Concierge booking available for fleets and
        executive vehicles.
      </p>
    </form>
  );
};

export default ContactForm;
