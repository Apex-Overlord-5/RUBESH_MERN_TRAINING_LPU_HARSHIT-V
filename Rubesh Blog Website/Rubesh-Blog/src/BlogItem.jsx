// src/BlogItem.jsx
import React, { useState } from 'react';

const BlogItem = ({ blog, deleteBlog, updateBlog }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState(blog);

  const handleDelete = () => {
    deleteBlog(blog.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = () => {
    updateBlog(blog.id, editedBlog);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedBlog.title}
            onChange={(e) => setEditedBlog({ ...editedBlog, title: e.target.value })}
          />
          <textarea
            value={editedBlog.content}
            onChange={(e) => setEditedBlog({ ...editedBlog, content: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogItem;
