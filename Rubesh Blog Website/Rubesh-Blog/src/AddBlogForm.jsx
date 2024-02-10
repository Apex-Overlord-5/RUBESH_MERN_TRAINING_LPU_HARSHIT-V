// src/AddBlogForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddBlogForm = ({ addBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', newBlog);
      addBlog(response.data);
      setNewBlog({ title: '', content: '' });
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... your existing form code */}
    </form>
  );
};

export default AddBlogForm;
