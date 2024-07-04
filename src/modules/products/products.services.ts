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

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFormDB,
  getSingleProductFromDB,
};
