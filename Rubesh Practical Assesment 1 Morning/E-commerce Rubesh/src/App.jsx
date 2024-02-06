// App.jsx
import React from 'react';
import ProductList from './ProductList';

const App = () => {
  const products = [
    {
      id: 1,
      title: 'Sony Walkman',
      company: 'Sony',
      price: 2500,
      image: require('./Images/ImageName1.png').default,
    },
    // Include image paths for other products
  ];

  return (
    <div>
      <h1>E-commerce App</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
