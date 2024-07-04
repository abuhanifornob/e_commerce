import { AnyArray } from 'mongoose';

import { TProducts } from './products.interface';
import { Product } from './products.model';

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProductsFormDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const searchProductFromDB = async (searchTerm: any) => {
  const result = await Product.find({
    $or: [
      { name: new RegExp(searchTerm, 'i') },
      { description: new RegExp(searchTerm, 'i') },
      { category: new RegExp(searchTerm, 'i') },
      { tags: new RegExp(searchTerm, 'i') },
    ],
  });
  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFormDB,
  getSingleProductFromDB,
  searchProductFromDB,
};
