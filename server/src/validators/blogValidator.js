import { check, validationResult } from 'express-validator';
import upload from '../middleware/fileUpload.js';


export const blogValidation = [
    upload.single('image'),
    check('title')
        .notEmpty()
        .withMessage('Title is required'),
    check('description')
        .notEmpty()
        .withMessage('Description is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }  next(); 
    }
];
