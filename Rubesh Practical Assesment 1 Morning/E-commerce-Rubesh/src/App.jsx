// src/App.js
import React from 'react';
import Product from './Product';

const products = [

  { id: 1, title: 'Sony Walkman 2300', description: 'Sony WalkMan 2300', price: " 2300", image: 'C:\\MERN RUBESH LPU WINTER PEP\\Rubesh Practical Assesment 1 Morning\\E-commerce-Rubesh\\src\\Images\\Sony.png' },
  { id: 2, title: 'I Phone 15', description: 'I Phone 15 is a 17th geneation samrtphone developed under apple', price: " 78000", image: 'https://newatlas.com/mobile-technology/iphone-15-pro-max/' },
  { id: 3, title: 'Oxford Dictionary', description: 'Oxford Dictionary gives you a GIST of all the newly added words and common Dictionary', price: " 4000", image: 'https://newatlas.com/mobile-technology/iphone-15-pro-max/' },
  { id: 4, title: 'Pilot V5', description: 'The chiseled tip allows you to give a good crispy sharp handwriting', price: " 70", image: 'https://newatlas.com/mobile-technology/iphone-15-pro-max/' },
];

const App = () => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
