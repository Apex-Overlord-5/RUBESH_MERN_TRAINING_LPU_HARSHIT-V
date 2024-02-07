import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Rs{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
    