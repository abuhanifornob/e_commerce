import express from 'express';

import { ProductControllers } from './products.controller';

const router = express.Router();
router.get('/products', ProductControllers.searchProduct);
router.post('/products', ProductControllers.createProducts);
router.get('/products', ProductControllers.getAllProducts);
router.get('/products/:productId', ProductControllers.getSingleProducts);

export const ProductRoutes = router;
