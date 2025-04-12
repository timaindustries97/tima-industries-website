import React, { useState } from "react";

const ProductDetail = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="product-detail">
      <div className="product-detail-grid">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[activeImageIndex]} alt={product.title} />
          </div>

          {product.images.length > 1 && (
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${
                    activeImageIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${product.title} - View ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-info-detailed">
          <h2>{product.title}</h2>
          <div className="product-specs">
            <h3>Specifications</h3>
            <p className="spec-item">
              <strong>Capacity:</strong> {product.capacity}
            </p>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-actions">
            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="btn btn-primary"
            >
              Inquire Now
            </a>
            <a href="tel:+918961194047" className="btn btn-outline">
              Call for Price
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
