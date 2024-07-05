import { Request, Response } from 'express';

import { OrderServices } from './order.services';
import { OrderModel } from './orders.model';
import { orderZodValidation } from './orders.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payloadData = req.body;
    // zod Validation
    const zodParseData = orderZodValidation.parse(payloadData);
    const result = await OrderServices.createOrdersIntoDB(zodParseData);

    if (
      result == 'Order not found' ||
      result == 'Insufficient quantity available in inventory'
    ) {
      res.status(500).json({
        success: false,
        message: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something Went Worng',
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    if (email) {
      // Search orders by email
      const exists = await OrderModel.isOrderExitsByEmail(email);
      if (!exists) {
        return res.status(500).json({
          success: false,
          message: 'Order not found',
        });
      }
      const result = await OrderServices.getSearchOrderByEmailFromDB(email);
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      // Get all orders
      const result = await OrderServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: 'All orders fetched successfully!',
        data: result,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something Went Worng',
    });
  }
};
// const searchOrderByEmail = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.query;
//     const result = await OrderServices.getSearchOrderByEmailFromDB(email);
//     res.status(200).json({
//       success: true,
//       message: 'Orders fetched successfully for user email!',
//       data: result,
//     });
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     res.status(500).json({
//       success: false,
//       message: error.message || 'Something Went Worng',
//     });
//   }
// };

export const OredersControllers = {
  createOrder,
  getAllOrders,
};
