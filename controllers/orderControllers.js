import Order from '../models/order';
import AsyncHandler from '../middlewares/AsyncHandler';

/*--------------------------------------------------------------------------------------*/
// @desc    Create New Order.
// @route   POST https://localhost:3000/api/order/

// @access  Public
const newOrder = AsyncHandler(async (req, res) => {
  const orderObj = req.body;

  try {
    const order = await Order.create(orderObj);

    if (!order) {
      return next(new ErrorHandler('Order failed to create!!', 404));
    }
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: true, error });
  }
});

/*--------------------------------------------------------------------------------------*/
// @desc    Fetch Specific USER Order.
// @route   POST https://localhost:3000/api/order/${user}

// @access  Public
const getUserOrders = AsyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({ user: req.query.user }).sort({
      createdAt: -1,
    });
    if (!orders) {
      return next(new ErrorHandler('Order failed to create!!', 404));
    }
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export { newOrder, getUserOrders };
