import React from "react";
import "../../styles/About.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <h1>About Tima Industries</h1>
          <p className="subtitle">
            Quality is the pillar of our success - delivering excellence in
            industrial manufacturing
          </p>
        </div>
      </section>

      <section className="section company-overview">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Company</h2>
              <p>
                <strong>TIMA INDUSTRIES</strong> is a Howrah, West Bengal based
                company and one of the best young and dynamic manufacturers of
                industrial components. Since our inception, we have been
                committed to delivering products that exceed industry standards
                and meet the specific needs of our clients.
              </p>
              <p>
                We specialize in manufacturing and supplying a wide range of
                products including Rollers, Bearing Blocks, Conveyor Pulleys,
                Rubber Rollers, Cam Shafts, Boiler Plates, Augers, Pins, Bushes,
                Gear Couplings, Gears, Worm Shafts, Bolts, Nuts, and Washers.
              </p>
              <p>
                Our state-of-the-art manufacturing facility is equipped with
                advanced machinery and technology, enabling us to produce
                high-quality components that are reliable and durable. We follow
                strict quality control measures at every stage of production to
                ensure that our products meet the highest standards.
              </p>
            </div>
            {/* <div className="about-image">
              <img
                src="/images/factory/about-factory.jpg"
                alt="Tima Industries Factory"
              />
            </div> */}
          </div>
        </div>
      </section>

      <section className="section mission-section bg-light">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To manufacture and supply high-quality industrial components
                that contribute to the success of our clients' operations. We
                aim to continuously improve our products and services through
                innovation and adherence to stringent quality standards.
              </p>
            </div>
            <div className="mission-box">
              <h2>Our Vision</h2>
              <p>
                To be recognized as a leader in industrial component
                manufacturing, known for our superior quality, reliability, and
                customer-centric approach. We aspire to expand our presence
                across India while maintaining our commitment to excellence and
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-description">
            Our people are hard-working and have earned their potentials that
            encapsulate in our extended product reach. Owing to their rich
            expertise and unparalleled skills, we have become the most selected
            entity in the industry. Our team members demonstrate a wide range of
            experience across a variety of tasks and leverage their technical
            expertise to create a high-quality product range.
          </p>

          <div className="team-values">
            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-8h2v8zm4 0h-2V9h2v8zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we do, from product
                design to customer service.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously explore new technologies and methods to improve
                our products.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="currentColor"
                >
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and ethical
                standards.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="currentColor"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3>Teamwork</h3>
              <p>
                We believe in the power of collaboration and the strength of a
                unified team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-section bg-light">
        <div className="container">
          <div className="quality-grid">
            {/* <div className="quality-image">
              <img
                src="/images/factory/quality-check.jpg"
                alt="Quality Assurance at Tima Industries"
              />
            </div> */}
            <div className="quality-content">
              <h2>Our Quality Assurance</h2>
              <p>
                <strong>Quality is the pillar of our success.</strong> Discover
                excellence with our products, the ultimate solution designed to
                exceed expectations. Engineered with cutting-edge technology,
                premium materials, and unmatched performance, our products set
                the gold standard in their category.
              </p>
              <p>
                Whether you're looking for durability, efficiency, or
                innovation, every Tima Industries product delivers it all —
                making us the top choice for customers who settle for nothing
                but the best. Backed by outstanding reviews and trusted by
                industry professionals, our products consistently outperform the
                competition in every key area.
              </p>
              <p>
                We endeavor to provide clients with the best products available
                in the market. Our rigorous quality testing assures clients of
                the authenticity and credibility of the range we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-description">
            From over two decades, our business operations are performed on the
            pivot of customer satisfaction. We attempt to build close relations
            with our esteemed customers and handle meticulous market analysis to
            satisfy the demands with innovative designs.
          </p>

          <div className="why-us-grid">
            <div className="why-us-card">
              <h3>Quality Products</h3>
              <p>
                Our products attain quality and efficiency as we are associated
                with business-leading vendors to obtain the best quality raw
                material and high-performing equipment from notable brands.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Competitive Pricing</h3>
              <p>
                We offer our high-quality products at competitive prices,
                ensuring that our clients receive the best value for their
                investment.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Timely Delivery</h3>
              <p>
                We understand the importance of time in business operations and
                ensure that all orders are delivered within the committed
                timeframe.
              </p>
            </div>

            <div className="why-us-card">
              <h3>Customer Support</h3>
              <p>
                Our dedicated customer support team is always ready to assist
                with any queries or concerns, ensuring a smooth and satisfactory
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work with Tima Industries?</h2>
            <p>
              Contact us today to discuss your requirements and discover how our
              products can enhance your operations.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
