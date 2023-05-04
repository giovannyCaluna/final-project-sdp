import { User } from "./User";

export interface Product {
    name: string;
    description: string;
    category: string;
    price: Number;
    seller: User;
    image: String;
}