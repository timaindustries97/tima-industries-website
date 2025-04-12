// src/components/home/ProductCatalog.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the products data
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        // Get the first 6 products or all if less than 6
        const featuredProducts = data.slice(0, 6);
        setProducts(featuredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section products-section">
      <div className="container">
        <h2 className="section-title">Our Featured Products</h2>

        {loading ? (
          <div className="loading-spinner">Loading products...</div>
        ) : (
          <>
            <div className="products-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  <div className="product-image">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <h3>{product.title}</h3>
                    <p className="product-capacity">{product.capacity}</p>
                    <Link
                      to={`/products#${product.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="btn btn-outline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="catalog-cta">
              <Link to="/products" className="btn btn-primary">
                View All Products
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
