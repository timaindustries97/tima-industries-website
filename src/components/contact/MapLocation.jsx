import React from "react";

const MapLocation = () => {
  return (
    <div className="map-container">
      <h2>Find Us</h2>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3683.681177389081!2d88.30802567530102!3d22.591024679478625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM1JzI3LjciTiA4OMKwMTgnMzguMiJF!5e0!3m2!1sen!2sin!4v1744453314622!5m2!1sen!2sin"
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
