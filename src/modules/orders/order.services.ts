import { Product } from '../products/products.model';

import { TOrders } from './orders.interface';
import { OrderModel } from './orders.model';

const createOrdersIntoDB = async (payload: TOrders) => {
  const { productId, quantity } = payload;
  const product = await Product.findById(productId);
  if (!product) {
    // return { success: false, message: 'Order not found' };
    return 'Order not found';
  }
  // Check if the ordered quantity exceeds the available quantity
  if (quantity > product.inventory.quantity) {
    // return { success: false, message: 'Insufficient stock' };
    return 'Insufficient stock';
  }
  if (quantity === product.inventory.quantity) {
    product.inventory.quantity = product.inventory.quantity - quantity;
    product.inventory.inStock = false;
    // Save the updated product
    await product.save();
  } else {
    // Update Remaning Quntity
    const newQuantity = product.inventory.quantity - quantity;
    product.inventory.quantity = newQuantity;
    await product.save();
  }

  // create New Order
  const result = await OrderModel.create(payload);
  return result;
};

export const OrderServices = {
  createOrdersIntoDB,
};
