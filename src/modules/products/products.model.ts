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
    required: [true, 'Name is Required'],
  },
  description: {
    type: String,
    required: [true, 'Description is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is Required'],
  },
  category: {
    type: String,
    required: [true, 'Price is Required'],
  },
  tags: {
    type: [String],
    required: [true, 'Tags is Required'],
  },
  variants: { type: [variantSchema], required: [true, 'Variants is Required'] },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is Required'],
  },
});

// // // create static for check uese exits
// productSchema.statics.isProductIdExits = async function (productId: string) {
//   const productIdExits = await Product.findById(productId); // Check this user id avelavel or not
//   return productIdExits;
// };

export const Product = model('Product', productSchema);
