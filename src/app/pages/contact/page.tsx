"use client";
import React from "react";
import "../../styles/contact.css";
import ContactForm from "@/app/components/contact-form";

const Contact = () => {
  return (
    <main className="contact-container">
      <section className="contact-us">
        <div className="location-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.078364991944!2d3.3537214742360217!3d6.63719019335727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93ec633837e3%3A0x6198d33109711b0e!2s9%20Adeyemo%20Akapo%20St%2C%20Omole%20Phase%201%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1747468252227!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Rs_Arena,+9+Adeyemo+Akapo+Street,+Omole+Phase+1"
            target="_blank"
            rel="noopener noreferrer"
            className="get-directions"
          >
            Get Directions
          </a>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
