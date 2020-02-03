const inicialState = {
  products: [],
  categories: [],
  cart: [],
};
/**
 * Reducer con las posibles acciones que se pueden tener sobre el
 * @param {*} state Estado con los valores a persistir con o sin información, se recomienda su inicialización
 * @param {*} action Objeto con los tipos de acciones a ejecutarse
 */
function ProductsReducer(state = inicialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {...state, products: action.products};
    }
    case 'SET_CATEGORIES': {
      return {...state, categories: action.categories};
    }
    case 'SET_PRODUCT_CART': {
      return {...state, cart: action.cart};
    }
    case 'CLEAN_CART': {
      return {...state, cart: []};
    }
    default:
      return state;
  }
}

export default ProductsReducer;
