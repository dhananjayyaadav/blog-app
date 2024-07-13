// import express from 'express';
// import { getSignup, postSignup, getLogin, postLogin } from '../controllers/authController.js';
// import { signupValidation, loginValidation } from '../validators/authValidator.js';

// const router = express.Router();

// router.route('/signup')
//     .get(getSignup)
//     .post(signupValidation, postSignup);

// router.route('/login')
//     .get(getLogin)
//     .post(loginValidation, postLogin);

// export default router;



// src/routes/authRoutes.js

import express from 'express';
import { signUp, signIn, getDashboard } from '../controllers/authController.js';
import verifyToken from '../middleware/authMiddleware.js';
import { signupValidation, loginValidation } from '../validators/authValidator.js';

const router = express.Router();

router.post('/signup', signupValidation, signUp);

// Route for user signin with login validation
router.post('/signin', loginValidation, signIn);

// Route for accessing user dashboard (requires token verification)
router.get('/dashboard', verifyToken, getDashboard);

export default router;


