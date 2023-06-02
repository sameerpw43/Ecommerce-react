import express from 'express'
import formidable from 'express-formidable'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProduct, getProductController, getSingleProduct, productCategoryController, productCountController, productFilterController, productListController, productPhotoController,  realtedProductController,  searchProductController, updateProductController } from '../controllers/productController.js';
import { requireSignIn } from '../middle/authMiddleware.js';
const router = express.Router()
// Create product
router.post('/create-product', formidable(), createProductController);

// Update product
router.post('/update-product/:pid', formidable(), updateProductController);

// Get single product
router.get('/get-product/:slug', getSingleProduct);

// Get product photo
router.get('/product-photo/:pid', productPhotoController);

// Delete product
router.delete('/product', deleteProduct);

// Filter products
router.post('/product-filters', productFilterController);

// Get product count
router.get('/product-count', productCountController);

// Get product list per page
router.get('/product-list/:page', productListController);

// Search product
router.get('/search/:keyword', searchProductController);

// Get related products
router.get('/related-product/:pid/:cid',realtedProductController);

// Get all products
router.get('/get-product', getProductController);
//Category wise product
router.get('/product-category/:slug',productCategoryController)
//payments routes
//token
router.get('/braintree/token',braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)
export default router