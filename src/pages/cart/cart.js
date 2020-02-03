import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CartLayout from './cart-layout';
import {Alert} from 'react-native';

class Cart extends Component {
  onPressBuy = () => {
    const {actions} = this.props;
    actions.cleanProducCarttStore();
    Alert.alert('¡Tu compra se a realizado con exito!');
  };

  render() {
    const {cart} = this.props;
    return <CartLayout dataCart={cart} onPressBuy={this.onPressBuy} />;
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
