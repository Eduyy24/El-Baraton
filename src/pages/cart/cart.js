import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CartLayout from './cart-layout';

class Cart extends Component {
  render() {
    return <CartLayout />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.productsReducer.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsMap, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
