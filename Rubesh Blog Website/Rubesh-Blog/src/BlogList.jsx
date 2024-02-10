// src/BlogList.jsx
import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, deleteBlog, updateBlog }) => {
  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} deleteBlog={deleteBlog} updateBlog={updateBlog} />
      ))}
    </div>
  );
};

export default BlogList;
