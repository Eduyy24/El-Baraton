import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CartLayout from './cart-layout';
import Toast from '../../modules-native/toast';

/**
 * Pagina encargada de la gestión del carrito de compras definido en el diseño, el cual permite
 * ver los productos agregados a este, asi como tambien, cambiar la cantidad de productos a comprar
 * y eliminar productos.
 * Los productos y modificaciones realizadas se conservan hasta que el usuario finalize la compra.
 * al finalizar la compra se despliega un toast informado al usuario la compra exitosa,
 * dicho modulo es implementado y consumido como un modulo nativo.
 */
class Cart extends Component {
  state = {update: false};
  onPressBuy = () => {
    const {actions} = this.props;
    actions.cleanProducCarttStore();
    Toast.show('¡Tu compra se a realizado con exito!', Toast.SHORT);
  };

  /**
   * Permite el aumento en 1 de los productos a comprar
   * @param {number} index Identifica la posición del producto dentro del Array de productos
   */
  onPressMore = index => {
    const {cart, actions} = this.props;
    cart[index].multiplier += 1;
    actions.setProductCartStore(cart);
    this.setState({update: this.state.update}); //obligar a hacer re-render
  };

  /**
   * Permite la disminución en 1 de los productos a comprar
   * @param {number} index Identifica la posición del producto dentro del Array de productos
   */
  onPressMinus = index => {
    const {cart, actions} = this.props;
    if (cart[index].multiplier !== 1) {
      cart[index].multiplier -= 1;
    }
    actions.setProductCartStore(cart);
    this.setState({update: this.state.update}); //obligar a hacer re-render
  };

  /**
   * Permite la eliminación de un producto del carrito de compras
   * @param {number} index Identifica la posición del producto dentro del Array de productos
   */
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

// mapea el estado global a la propiedades locales de la pagina
function mapStateToProps(state) {
  return {
    cart: state.productsReducer.cart,
  };
}

// mapea las acciones disponibles sobre el store para su consumo
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsMap, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
