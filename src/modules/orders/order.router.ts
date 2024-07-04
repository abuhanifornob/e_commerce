import express from 'express';

import { OredersControllers } from './orders.controllers';

const router = express.Router();

router.post('/orders', OredersControllers.createOrder);

export const OrdersRoutes = router;
