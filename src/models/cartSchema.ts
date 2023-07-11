import mongoose,{Schema} from "mongoose";

import { Product } from "../models/productSchema";


export interface cartItem {
    product: Product['_id'];
    quantity: number;
  }
  
  export interface ICart extends Document {
    items: cartItem[];
  }


  const CartSchema = new Schema({
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
      },
    ],
  });
  
  export const Cart = mongoose.model<ICart>('Cart', CartSchema);
