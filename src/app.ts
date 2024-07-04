import express, { Application, Request, Response } from 'express';

import cors from 'cors';

import { OrdersRoutes } from './modules/orders/order.router';
import { ProductRoutes } from './modules/products/products.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', ProductRoutes);
app.use('/api', OrdersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
