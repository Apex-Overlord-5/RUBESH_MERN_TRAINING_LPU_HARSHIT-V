// Product.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const { title, company, price, image } = product;

  return (
    <div className="product-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Price:</strong> Rs {price}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
