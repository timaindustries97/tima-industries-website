// components/ContactForm.jsx
import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_k7ujy5g",
        "template_8erqh7h", 
        formData,
        "Ds1QURIbn4pZQPFoF"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setFormStatus({
            submitted: true,
            error: false,
            message:
              "Thank you for your message! We will get back to you soon.",
          });

          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setFormStatus({ submitted: false, error: false, message: "" });
          }, 5000);
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setFormStatus({
            submitted: true,
            error: true,
            message: "Failed to send. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="contact-form-container" id="contact-us-form">
      <h2>Send Us a Message</h2>
      <p>
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      {formStatus.message && (
        <div
          className={`form-message ${formStatus.error ? "error" : "success"}`}
        >
          {formStatus.message}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 XXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Inquiry about products"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <Send size={18} />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
