import { Router, Request, Response } from "express";
import { Product } from "../models/productSchema";
import {Cart ,cartItem} from '../models/cartSchema';
import multer from "multer";


export const addProduct = async (req: Request, res: Response) => {
    try {
      const { productName, productImage, description,quantity,unitPrice} = req.body;
    
      console.log(req.body)
 
      const existingProduct = await Product.findOne({ productName: productName });
      if (existingProduct) {
        return res.status(400).send("Product already registered");
      }

      const product = new Product(req.body);
      await product.save();
     res.status(201).json({ message: 'Product added successfully', product });
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };

  

  export const getProduct = async (req: Request, res: Response) => {
    try {
      const product = await Product.find();
      res.status(201).json({ message: 'Get All Product successfully...', product });
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };


  export const getProductById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      console.log(id);
      const product = await Product.findById(id);
      res.status(201).json({ message: 'Get Product by Id successfully...', product });
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };

  export const createCart = async (req: Request, res: Response) => {
    try {
      const { productId, quantity } = req.body;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const cartItem: cartItem  = {
        product: product._id,
        quantity,
      };
  
      const cart = new Cart({ items: [cartItem] });
      await cart.save();
  
      res.status(201).json({ message: 'Item added to cart successfully', cart });
  
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };


  
  export const updateCart = async (req: Request, res: Response) => {
    try {
      const { itemId } = req.params;
    const { quantity } = req.body;

    const cart = await Cart.findById(itemId);
    if (!cart) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    cart.items[0].quantity = quantity;
    await cart.save();

    res.json({ message: 'Item quantity updated successfully', cart });
  
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };


  export const getCart = async (req: Request, res: Response) => {
    try {
      const product = await Cart.find();
      res.status(201).json({ message: 'Get Cart Product successfully...', product });
    } catch (err: any) {
      return res.status(400).send(err.message);
    }
  };

