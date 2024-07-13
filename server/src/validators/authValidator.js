import { check, validationResult } from 'express-validator';
import upload from '../middleware/fileUpload.js';

export const signupValidation = [
    upload.single('profileImage'), 
    check('email')
        .isEmail()
        .withMessage('Enter a valid email'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next(); // Proceed to the next middleware or route handler
    }
];

export const loginValidation = [
    check('email')
        .isEmail()
        .withMessage('Enter a valid email'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } next(); 
    }
];
