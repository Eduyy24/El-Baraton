const inicialState = {
  products: [],
  categories: [],
  cart: [],
};

function ProductsReducer(state = inicialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {...state, products: action.products};
    }
    case 'SET_CATEGORIES': {
      return {...state, categories: action.categories};
    }
    case 'SET_PRODUCT_CART': {
      return {...state, cart: state.cart.push(action.product)};
    }
    case 'CLEAN_CART': {
      return {...state, cart: []};
    }
    default:
      return state;
  }
}

export default ProductsReducer;
