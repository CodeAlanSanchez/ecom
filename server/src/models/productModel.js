import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: String,
  company: String,
  image: String,
  description: String,
  price: Number,
});

export default mongoose.model('product', ProductSchema);
