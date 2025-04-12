import React from "react";

const ProductCard = ({ product, onClick, isActive }) => {
  return (
    <div
      className={`product-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="product-image">
        <img loading="lazy" src={product.images[0]} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-capacity">{product.capacity}</p>
        <p className="product-description">{product.description}</p>
        <button className="btn btn-outline">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
