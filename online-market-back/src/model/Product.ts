import mongoose from 'mongoose';
import { User } from './User';
import { IUser } from './User';

export const ProductSchema = new mongoose.Schema({
    name: String, 
    available:{
        type:Boolean,default:true}
        ,
    description: String,
    category: String,
    price: Number,
    seller: String,
    image:{
        type:String,
        default:"Not available"
    },
});

export interface IProduct extends mongoose.Document {
    name: String, 
    available:Boolean,
    description: String,
    category: String,
    price: Number,
    seller: String,
    image: String
}

export const Product: mongoose.Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);


