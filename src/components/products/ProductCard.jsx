import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isActive }) => {
  return (
    <div
      className={`product-card ${isActive ? "active" : ""}`}
    >
      <div className="product-image">
        <img loading="lazy" src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-capacity">{product.capacity}</p>
        <p className="product-description">{product.description}</p>
        <Link to={`/contact#contact-us-form`} className="btn btn-outline">
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
