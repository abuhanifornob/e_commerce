import { Schema, model } from 'mongoose';

// Define the Variant sub-schema
export const variantSchema = new Schema({
  type: { type: String, required: [true, 'Type is Requuired'] },
  value: { type: String, required: [true, 'Value is Required'] },
});

// Define the Inventory sub-schema
export const inventorySchema = new Schema({
  quantity: { type: Number, required: [true, 'Qunentey is Required'] },
  inStock: { type: Boolean, required: true },
});

export const productSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Name is Required'],
  },
  description: {
    type: String,
    require: [true, 'Description is Required'],
  },
  price: {
    type: Number,
    require: [true, 'Price is Required'],
  },
  category: {
    type: String,
    require: [true, 'Price is Required'],
  },
  tags: {
    type: [String],
    require: [true, 'Tags is Required'],
  },
  variants: { type: [variantSchema], required: [true, 'Variants is Required'] },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is Required'],
  },
});

export const Product = model('Product', productSchema);
