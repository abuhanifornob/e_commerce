import { Request, Response } from 'express';

import { ProductServices } from './products.services';

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product create False',
    });
  }
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFormDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product create False',
    });
  }
};
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product create False',
    });
  }
};

export const ProductControllers = {
  createProducts,
  getAllProducts,
  getSingleProducts,
};
