import { Request, Response } from 'express';

import { OrderServices } from './order.services';
import { orderZodValidation } from './orders.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payloadData = req.body;
    // zod Validation
    const zodParseData = orderZodValidation.parse(payloadData);
    const result = await OrderServices.createOrdersIntoDB(zodParseData);
    console.log(result);
    if (result == 'Order not found' || result == 'Insufficient stock') {
      res.status(200).json({
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

export const OredersControllers = {
  createOrder,
};
