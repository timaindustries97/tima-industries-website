// pages/ContactPage.jsx
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import MapLocation from "./MapLocation";
import '../../styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries or support</p>
        </div>
      </div>

      <div className="contact-container container">
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p>
            Feel free to reach out to us through any of the following channels:
          </p>

          <div className="info-card">
            <div className="icon-container">
              <MapPin size={24} />
            </div>
            <div className="info-content">
              <h3>Address</h3>
              <p>Ichapur Canelside Road</p>
              <p>Santragachi, Howrah - 711104</p>
              <p>West Bengal, India</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <Phone size={24} />
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>
                <a href="tel:+918961194047">+91 8961194047</a>
              </p>
              <p>
                <a href="tel:+919163596942">+91 9163596942</a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <Mail size={24} />
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>
                <a href="mailto:timaindustries97@gmail.com">
                  timaindustries97@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-container">
              <Clock size={24} />
            </div>
            <div className="info-content">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="company-details">
            <p>
              <strong>GSTIN:</strong> 19BNLPJ5543C1ZY
            </p>
            <p>
              <strong>UDYAM REG. NO.:</strong> UDYAM-WB-08-0042288
            </p>
            <p>
              <strong>PROPRIETOR:</strong> A. Kumar
            </p>
          </div>
        </div>

        <ContactForm />
      </div>

      <MapLocation />
    </div>
  );
};

export default ContactPage;
