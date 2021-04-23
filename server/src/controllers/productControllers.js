import mongoose from 'mongoose';
import Product from '../models';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body;

    const newProduct = new Product(product);

    await Product.save(newProduct);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const newProduct = req.body;

    const { _id: id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Product not found');

    const updatedProduct = Product.findOneAndUpdate(id, newProduct);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { _id: id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Product not found');

    const deletedProduct = Product.findOneAndRemove(id);

    res.status(200).json({ deletedProduct });
  } catch (error) {
    res.status(400).json({ error });
  }
};