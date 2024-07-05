import { Schema, model } from 'mongoose';

import { OrderStaticModel, TOrders } from './orders.interface';

const orderSchema = new Schema<TOrders, OrderStaticModel>({
  email: {
    type: String,
    required: [true, 'Email is Required'],
  },
  productId: {
    type: String,
    required: [true, 'productId is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Number is Required'],
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is Required'],
  },
});

orderSchema.statics.isOrderExitsByEmail = async function (email: string) {
  return await OrderModel.findOne({ email });
};
export const OrderModel = model<TOrders, OrderStaticModel>(
  'Order',
  orderSchema,
);
