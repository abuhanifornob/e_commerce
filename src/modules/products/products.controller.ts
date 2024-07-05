import { Request, Response } from 'express';

import { Product } from './products.model';
import { ProductServices } from './products.services';
import { productZodValidationSchema } from './products.validation';

const createProducts = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const parseZodValidataionData = productZodValidationSchema.parse(product);
    const result = await ProductServices.createProductIntoDB(
      parseZodValidataionData,
    );
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
    const searchTerm = req.query.searchTerm as string | undefined;
    if (searchTerm) {
      const result = await ProductServices.searchProductFromDB(searchTerm);
      if (result.length <= 0) {
        return res.status(500).json({
          success: false,
          message: 'Not Found Product',
        });
      }
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      const result = await ProductServices.getAllProductsFormDB();
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }

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

    // Check Product id Exists
    const existsProduct = await Product.isProductIdExits(productId);
    if (!existsProduct) {
      return res.status(500).json({
        success: false,
        message: 'Product id is not Exists',
      });
    }
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
// const searchProduct = async (req: Request, res: Response) => {
//   try {
//     const { searchTerm } = req.query;
//     const result = await ProductServices.searchProductFromDB(searchTerm);
//     if (result.length <= 0) {
//       return res.status(500).json({
//         success: false,
//         message: 'Not Found Product',
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: `Products matching search term ${searchTerm}' fetched successfully!`,
//       data: result,
//     });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message || 'Product create False',
//     });
//   }
// };
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    // Check Product id Exists
    const existsProduct = await Product.isProductIdExits(productId);
    if (!existsProduct) {
      return res.status(500).json({
        success: false,
        message: 'Product id is not Exists',
      });
    }

    await ProductServices.deletePrductFormDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Product create False',
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    // Check Product id Exists
    const existsProduct = await Product.isProductIdExits(productId);
    if (!existsProduct) {
      return res.status(500).json({
        success: false,
        message: 'Product id is not Exists',
      });
    }

    const result = await ProductServices.updateProductFormDB(
      productId,
      updatedData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
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

  deleteProduct,
  updateProduct,
};
