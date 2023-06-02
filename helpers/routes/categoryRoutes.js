import express from 'express';
import { requireSignIn,isAdmin } from '../middle/authMiddleware.js';
import { categoryController, createCategoryController, updateCategoryController,singleCategoryController, deleteCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

// Routes
router.post('/create-category',requireSignIn,isAdmin ,createCategoryController);


//update category 
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)
//get all category

router.get('/get-category',categoryController)

//single category
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIn,isAdmin,deleteCategoryController)

export default router;
