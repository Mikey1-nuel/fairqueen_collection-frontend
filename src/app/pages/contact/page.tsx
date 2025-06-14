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
              src="https://www.google.com/maps?q=Shariff+Plaza,+24+Aminu+Kano+Crescent,+Wuse+2,+Abuja,+Nigeria+904101&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps?q=Shariff+Plaza,+24+Aminu+Kano+Crescent,+Wuse+2,+Abuja,+Nigeria+904101"
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
