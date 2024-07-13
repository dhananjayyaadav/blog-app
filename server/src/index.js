import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors'

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const db = process.env.MONGO_URI;

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blogs', blogRoutes);

app.get("/", (req, res) => {
    return res.send({ message: "API Working with /api/v1" });
  });

mongoose.connect(db).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
