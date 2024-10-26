export const subTotal = (id, price) => {
  let subTotalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    if (item.id === id) {
      subTotalCost = item.quantity * price;
    }
  });
  return subTotalCost;
};

export const quantity = (id) => {
  let product = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    if (item.id === id) {
      product = item.quantity;
    }
  });
  return product;
};

export const totalCost = () => {
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  let subtotal = 0;

  for (let item of cart) {
    subtotal += item.quantity * item.price;
  }

  return subtotal.toFixed(2); // Ensure subtotal is formatted to two decimal places
};

