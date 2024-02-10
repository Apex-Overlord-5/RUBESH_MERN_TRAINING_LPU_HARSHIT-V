// src/App.jsx
import React, { useState } from 'react';
import BlogList from './BlogList';
import AddBlogForm from './AddBlogForm';

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
    <div style={{ backgroundColor: 'silver', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Rubesh Blogging Website</h1>
      <AddBlogForm addBlog={addBlog} />
      <BlogList blogs={blogs} deleteBlog={deleteBlog} updateBlog={updateBlog} />
    </div>
  );
};

export default App;
