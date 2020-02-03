export const setCategoriesStore = categories => ({
  type: 'SET_CATEGORIES',
  categories,
});

export const setProductStore = products => ({
  type: 'SET_PRODUCTS',
  products,
});

export const setProductCartStore = cart => ({
  type: 'SET_PRODUCT_CART',
  cart,
});

export const cleanProducCarttStore = products => ({
  type: 'CLEAN_CART',
});
