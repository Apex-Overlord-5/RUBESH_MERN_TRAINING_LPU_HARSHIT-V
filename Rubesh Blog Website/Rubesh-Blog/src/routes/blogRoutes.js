// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new blog
router.post('/blogs', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a blog
router.delete('/blogs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a blog
router.put('/blogs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content }, { new: true });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
