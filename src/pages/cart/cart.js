import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CartLayout from './cart-layout';
import Toast from '../../modules-native/toast';

class Cart extends Component {
  state = {update: false};
  onPressBuy = () => {
    const {actions} = this.props;
    actions.cleanProducCarttStore();
    Toast.show('¡Tu compra se a realizado con exito!', Toast.SHORT);
  };

  onPressMore = index => {
    const {cart, actions} = this.props;
    cart[index].multiplier += 1;
    actions.setProductCartStore(cart);
    this.setState({update: this.state.update}); //obligar a hacer re-render
  };

  onPressMinus = index => {
    const {cart, actions} = this.props;
    if (cart[index].multiplier !== 1) {
      cart[index].multiplier -= 1;
    }
    actions.setProductCartStore(cart);
    this.setState({update: this.state.update}); //obligar a hacer re-render
  };

  onPressDelete = index => {
    const {cart, actions} = this.props;
    cart.splice(index, 1);
    actions.setProductCartStore(cart);
    this.setState({update: this.state.update}); //obligar a hacer re-render
  };

  render() {
    const {cart} = this.props;
    return (
      <CartLayout
        dataCart={cart}
        onPressBuy={this.onPressBuy}
        onPressMore={this.onPressMore}
        onPressMinus={this.onPressMinus}
        onPressDelete={this.onPressDelete}
      />
    );
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
