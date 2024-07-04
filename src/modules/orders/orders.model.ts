import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
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

export const OrderModel = model('Order', orderSchema);
