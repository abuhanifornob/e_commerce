import express from 'express';

import { ProductControllers } from './products.controller';

const router = express.Router();

router.post('/products', ProductControllers.createProducts);

export const ProductRoutes = router;
