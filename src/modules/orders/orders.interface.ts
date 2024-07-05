import { Model } from 'mongoose';

export interface TOrders {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

export interface OrderStaticModel extends Model<TOrders> {
  // eslint-disable-next-line no-unused-vars
  isOrderExitsByEmail(email: string): Promise<TOrders>;
}
