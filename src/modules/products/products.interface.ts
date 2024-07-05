import { Model } from 'mongoose';

export interface Variant {
  type: string;
  value: string;
}

export interface Inventory {
  quantity: number;
  inStock: boolean;
}

export interface TProducts {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
}

// // Create a Static  model
export interface ProductStaticModel extends Model<TProducts> {
  // eslint-disable-next-line no-unused-vars
  isProductIdExits(productId: string): Promise<TProducts | null>;
}
