export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type TProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

// // // Create a Static  model
// export interface ProductModel extends Model<TProducts> {
//   isProductIdExits(productId: string): Promise<TProducts | null>;
// }
