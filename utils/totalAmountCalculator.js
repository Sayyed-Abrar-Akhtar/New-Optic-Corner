export const totalAmountCalculator = (orders = [[]]) => {
  return orders.reduce(
    (acc, order) =>
      (acc += order.items.reduce(
        (accumulator, item) => (accumulator += item.qty * item.price),
        0
      )),
    0
  );
};
