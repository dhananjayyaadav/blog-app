import Blog from '../models/Blog.js'; // Adjust import as needed

// Controller function to create a new blog post
export const createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : ''; // Get uploaded file path

    // Create new blog post
    const newBlog = new Blog({
      title,
      image,
      description
    });

    await newBlog.save();
    res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller function to fetch all blog posts
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // Fetch all blogs sorted by createdAt descending
    res.status(200).json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller function to update a blog post
export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post updated successfully', blog: updatedBlog });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Controller function to delete a blog post
export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
