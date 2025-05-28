import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <h2> Let's Connect</h2>
      <p>
        I'm always open to chatting about projects, opportunities, or cool
        ideas.
      </p>
      <div className="contact-links">
        <a href="mailto:umasthothrabhashyam@gmail.com"> Email</a>
        <a href="https://github.com/umastotra" target="_blank">
          GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/uma-sthothrabhashyam-8bb35216/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
