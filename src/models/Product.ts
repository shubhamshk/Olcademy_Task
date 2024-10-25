import mongoose, { Schema, Document, Model } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  images: string[]; // Updated to an array of image URLs
}

const ProductSchema: Schema<IProduct> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true }, // Changed `imageUrl` to `images` array
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
