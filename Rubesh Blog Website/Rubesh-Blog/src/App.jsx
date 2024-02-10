// src/App.jsx
import React, { useState } from 'react';
import BlogList from './BlogList';
import AddBlogForm from './AddBlogForm';
import './App.css'; // Import the CSS file

const App = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', content: 'This is my first blog post.' },
    { id: 2, title: 'Second Blog', content: 'This is my second blog post.' },
  ]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map((blog) => (blog.id === id ? updatedBlog : blog)));
  };

  return (
    <div className="container">
      <h1>Rubesh Blogging Website</h1>
      <AddBlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} deleteBlog={deleteBlog} updateBlog={updateBlog} />
    </div>
  );
};

export default App;
