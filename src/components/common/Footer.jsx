import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section company-overview">
          <h3>TIMA INDUSTRIES</h3>
          <p>
            A Howrah, West Bengal based ISO 9001:2015 certified company
            manufacturing high-quality industrial rollers, bearing blocks,
            conveyor pulleys, and more. Quality is the pillar of our success.
          </p>
        </div>

        <div className="footer-section address">
          <h3>Our Address</h3>
          <p>
            Ichapur Canalside Road
            <br />
            Santragachi, Howrah - 711104
            <br />
            West Bengal, India
          </p>
          <p className="gstin">
            <strong>GSTIN:</strong> 19BNLPJ5543C1ZY
            <br />
            <strong>UDYAM REG. NO.:</strong> UDYAM-WB-08-0042288
            <br />
            <strong>D&B D-U-N-S NO.:</strong> 64-178-6287
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Get In Touch</h3>
          <p>
            <a href="tel:+918961194047">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              +91 8961194047
            </a>
          </p>
          <p>
            <a href="tel:+919163596942">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              +91 9163596942
            </a>
          </p>
          <p>
            <a href="mailto:timaindustries97@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              timaindustries97@gmail.com
            </a>
          </p>
        </div>

        <div className="footer-section map">
          <h3>Location</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3683.681177389081!2d88.30802567530102!3d22.591024679478625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM1JzI3LjciTiA4OMKwMTgnMzguMiJF!5e0!3m2!1sen!2sin!4v1744453314622!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Tima Industries Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} TIMA INDUSTRIES. All Rights
            Reserved.
          </p>
          <p>Prop: A. Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
