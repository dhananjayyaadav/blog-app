// // utils/authMiddleware.js
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import User from '../models/User.js';

// dotenv.config();

// export const authenticateToken = async (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.userId);
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(403).json({ error: 'Forbidden' });
//   }
// };
