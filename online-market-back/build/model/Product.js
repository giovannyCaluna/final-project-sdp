"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProductSchema = new mongoose_1.default.Schema({
    name: String,
    available: {
        type: Boolean, default: true
    },
    description: String,
    category: String,
    price: Number,
    seller: String,
    image: {
        type: String,
        default: "Not available"
    },
});
exports.Product = mongoose_1.default.model('Product', exports.ProductSchema);
