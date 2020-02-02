const inicialState = {
  products: {},
  categories: {},
};

function ProductsReducer(state = inicialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {...state, products: action.products};
    }
    case 'SET_CATEGORIES': {
      return {...state, categories: action.categories};
    }
    default:
      return state;
  }
}

export default ProductsReducer;
