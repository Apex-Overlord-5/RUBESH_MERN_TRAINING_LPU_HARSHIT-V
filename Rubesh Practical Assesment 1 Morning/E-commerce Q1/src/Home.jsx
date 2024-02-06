// // src/pages/Home.js
// import React, { useState } from 'react';
// import ProductList from '../components/ProductList';

// const Home = ({ products }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 5;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <ProductList products={currentProducts} />
//       <div>
//         {products.length > productsPerPage && (
//           <ul className="pagination">
//             {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
//               <li key={index}>
//                 <button onClick={() => paginate(index + 1)}>{index + 1}</button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
