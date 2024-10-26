export const cartList = () => {
  let carts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
  let list = [];

  if (carts !== null) {
    for (let cart of carts) {
      list.push(cart);
    }
    return list;
  } else {
    return null;
  }
};


export const updateQuantity = (
  type,
  totalQuantity,
  quantity,
  setQuantity,
  setAlertq
) => {
  if (type === "increase") {
    if (quantity === totalQuantity) {
      setAlertq(true);
    } else {
      setQuantity(quantity + 1);
    }
  } else if (type === "decrease") {
    if (quantity === 1) {
      setQuantity(1);
      setAlertq(false);
    } else {
      setQuantity(quantity - 1);
    }
  }
};

export const slideImage = (type, active, count, setCount, pImages) => {
  if (active === count) {
    return true;
  }
  if (type === "increase") {
    if (count === pImages.length - 1) {
      setCount(0);
    } else if (count < pImages.length) {
      setCount(count + 1);
    }
  }
};

export const inCart = (id) => {
  if (localStorage.getItem("cart")) {
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    for (let product of cartProducts) {
      if (product.id === id) {
        return true;
      }
    }
  }
  return false;
};

// Mixins.js

export const addToCart = (
  id,
  quantity,
  price,
  layoutDispatch,
  setQuantity,
  setAlert,
  fetchData,
  totalCost
) => {
  // Check if quantity and price are valid numbers
  if (isNaN(quantity) || isNaN(price)) {
    console.error('Invalid quantity or price:', quantity, price);
    return; // Exit function if invalid
  }

  let isObjectPresent = false;
  let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

  // Check if cart is an array
  if (!Array.isArray(cart)) {
    console.error('Cart data is not an array:', cart);
    return; // Exit function if cart data is not an array
  }

  // Check if item with same id already exists in cart
  cart.forEach((item) => {
    if (item.id === id) {
      isObjectPresent = true;
    }
  });

  // If item not present, add it to cart
  if (!isObjectPresent) {
    cart.push({ id, quantity, price });
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Update UI and fetch data
  layoutDispatch({ type: 'inCart', payload: cartList() });
  layoutDispatch({ type: 'cartTotalCost', payload: totalCost() });
  setQuantity(1);
  setAlert(false);
  fetchData();
};
