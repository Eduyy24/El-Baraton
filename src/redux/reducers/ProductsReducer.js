const inicialState = {
  products: {},
  categories: {},
};

function ProductsReducer(state = inicialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {...state, user: action.products};
    }
    case 'SET_CATEGORIES': {
      return {...state, user: action.categories};
    }
    default:
      return state;
  }
}

export default ProductsReducer;
