import mongoose,{Schema} from "mongoose";



interface Product{
    productName: string;
    productImage: string;
    description: string;
    quantity: number;
    unitPrice: number;
  }


const ProductSchema = new Schema<Product>(
    {
        productName: {
            type: String,
            required: true,
        },
        productImage: {
            // data: Buffer,
            // contentType:String
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        quantity: {
            type: Number,
            required: true,
        },
        unitPrice: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
  );

  export const Product = mongoose.model<Product>("Product", ProductSchema);

