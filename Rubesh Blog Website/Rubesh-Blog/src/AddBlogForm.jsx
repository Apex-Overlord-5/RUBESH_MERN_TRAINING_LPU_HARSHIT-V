// src/AddBlogForm.jsx
import React, { useState } from 'react';

const AddBlogForm = ({ addBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ ...newBlog, id: Date.now() });
    setNewBlog({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Blog</h2>
      <label>
        Title:
        <input
          type="text"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
      </label>
      <label>
        Content:
        <textarea
          value={newBlog.content}
          onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
        />
      </label>
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default AddBlogForm;
