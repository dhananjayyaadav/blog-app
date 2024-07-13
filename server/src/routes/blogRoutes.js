import express from 'express';
import { createBlog, getAllBlogs, updateBlog, deleteBlog } from '../controllers/blogController.js';
import verifyToken from '../middleware/authMiddleware.js'; // Import the verifyToken middleware
import { blogValidation } from '../validators/blogValidator.js';

const router = express.Router();

// Apply verifyToken middleware 
router.post('/createBlog', verifyToken, blogValidation, createBlog, (req, res) => {
    res.json({ message: 'File uploaded successfully', file: req.file });
  });
router.get('/getAll', verifyToken, getAllBlogs);
router.put('/:id', verifyToken, blogValidation, updateBlog);
router.delete('/:id', verifyToken, deleteBlog);

export default router;
