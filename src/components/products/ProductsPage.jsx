import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import '../../styles/Products.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Fetch the products data
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
        
        // Check if there's a hash in the URL
        const hash = window.location.hash.substring(1);
        if (hash) {
          const product = data.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === hash);
          if (product) {
            setSelectedProduct(product);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Extract unique categories from products
  // const categories = ['all', ...new Set(products.map(product => {
  //   // Extract category from product title or assign a default category
  //   const mainCategory = product.title.split(' ')[0].toLowerCase();
  //   return mainCategory;
  // }))];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.title.toLowerCase().includes(activeCategory));

  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  //   // Update URL with product hash
  //   window.location.hash = product.title.toLowerCase().replace(/\s+/g, '-');
  //   // Scroll to product detail
  //   document.getElementById('product-detail').scrollIntoView({ behavior: 'smooth' });
  // };

  // const handleCategoryChange = (category) => {
  //   setActiveCategory(category);
  //   setSelectedProduct(null);
  //   window.location.hash = '';
  // };

  return (
    <div className="products-page">
      <section className="hero-section">
        <div className="container">
          <h1>Our Products</h1>
          <p className="subtitle">
            High-quality industrial components engineered for excellence
          </p>
        </div>
      </section>

      <section className="section products-catalog">
        <div className="container">
          <div className="category-filter">
            <h2>Product Categories</h2>
            {/* <div className="filter-buttons">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div> */}
          </div>

          {loading ? (
            <div className="loading-spinner">Loading products...</div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product} 
                  isActive={selectedProduct && selectedProduct.title === product.title}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <section id="product-detail" className="section product-detail-section">
          <div className="container">
            <ProductDetail product={selectedProduct} />
          </div>
        </section>
      )}

      <section className="section product-inquiry">
        <div className="container">
          <div className="inquiry-content">
            <h2>Need Custom Products?</h2>
            <p>
              We specialize in custom manufacturing to meet your specific industrial needs. 
              Contact us today to discuss your requirements and get a quote.
            </p>
            <div className="inquiry-actions">
              <a href="/contact#conatct-us-form" className="btn btn-primary">Request a Quote</a>
              <a href="tel:+918961194047" className="btn btn-outline">Call Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;