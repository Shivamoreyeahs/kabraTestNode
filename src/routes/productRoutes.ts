import express from 'express';
import {addProduct,getProduct,getProductById,createCart,updateCart,getCart} from '../controllers/productController';


import multer from "multer";
import { get } from 'http';

const upload = multer({ dest: 'uploads/' });


export const router = express.Router();

router.post('/addProduct',upload.single("image"),addProduct);

router.get('/getProduct',getProduct);

router.get('/getProductById',getProductById);


// cart api
router.post('/createCart',createCart);

router.post('/updateCart',updateCart);

router.get('/getCart',getCart);
