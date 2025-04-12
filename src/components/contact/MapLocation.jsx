import React from "react";

const MapLocation = () => {
  return (
    <div className="map-container">
      <h2>Find Us</h2>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29474.81430147858!2d88.27050037910156!3d22.560000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c00f135835%3A0xf1d03c9f09f3be13!2sSantragachi%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1713023460927!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tima Industries Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;
