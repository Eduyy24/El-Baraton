import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CategoryLayout from './category-layout';
import ModalFilter from './components/modal-filter';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    subCategories: [],
    productsShow: [],
    auxProductsShow: [],
    visibleModal: false,
  };

  componentDidMount() {
    const {navigation, categories, products} = this.props;
    const {subCategories} = this.state;

    //se extrae el id de la categoría para consultar toda la información de la misma.
    const id = navigation.getParam('id');
    subCategories.push(categories[id].sublevels);
    const productsFiltered = products.filter(
      product => product.sublevel_id === id,
    );
    this.setState({
      subCategories,
      productsShow: productsFiltered,
      auxProductsShow: productsFiltered,
    });
  }

  onPressShipSubCategory = (id, indexSection, data) => {
    const {subCategories} = this.state;
    const {products} = this.props;

    if (data) {
      if (subCategories[indexSection]) {
        subCategories[indexSection] = data;
      } else {
        subCategories.push(data);
      }
    } else {
      if (subCategories[indexSection]) {
        subCategories.splice(indexSection, 1);
      }
    }
    if (subCategories[indexSection + 1]) {
      for (var i = indexSection + 1; i < subCategories.length; i++) {
        subCategories.splice(i, 1);
      }
    }

    const productsFiltered = products.filter(
      product => product.sublevel_id === id,
    );
    this.setState({
      subCategories,
      productsShow: productsFiltered,
      auxProductsShow: productsFiltered,
    });
  };

  onPressOrder = type => {
    var {productsShow, auxProductsShow} = this.state;
    switch (type) {
      case 'price':
        productsShow = auxProductsShow.sort((a, b) => {
          const value1 = a.price.replace('$', '').replace(',', '');
          const value2 = b.price.replace('$', '').replace(',', '');
          return value1 - value2;
        });
        break;
      case 'available':
        productsShow = auxProductsShow.sort((a, b) => {
          return b.available - a.available;
        });
        break;
      case 'quantity':
        productsShow = auxProductsShow.sort((a, b) => {
          return a.quantity - b.quantity;
        });
        break;
    }
    this.setState({productsShow});
  };

  onPressfilter = () => {
    this.setState({visibleModal: true});
  };

  onPressCloseModal = () => {
    this.setState({visibleModal: false});
  };

  onPressAddCart = product => {
    const {actions, cart} = this.props;
    //Se agrega el atributo multiplier para la gestión de la cantidad de productos en la page de Cart
    cart.push({...product, multiplier: 1});
    actions.setProductCartStore(cart);
    this.setState({productsShow: this.state.productsShow}); //obligar a hacer re-render
  };

  onPressFilterModal = products => {
    this.setState({productsShow: products, auxProductsShow: products});
  };

  render() {
    const {subCategories, productsShow, visibleModal} = this.state;
    const {cart, navigation} = this.props;
    return (
      <CategoryLayout
        initialData={subCategories}
        onPressShipSubCategory={this.onPressShipSubCategory}
        productsShow={productsShow}
        onPressfilter={this.onPressfilter}
        onPressOrder={this.onPressOrder}
        onPressAddCart={this.onPressAddCart}
        numProductCart={cart.length}
        onPressgoToCart={() => navigation.navigate('Cart')}
        modalFilter={
          <ModalFilter
            visibleModal={visibleModal}
            onPressCloseModal={this.onPressCloseModal}
            products={productsShow}
            onPressFilterModal={this.onPressFilterModal}
          />
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.productsReducer.categories,
    products: state.productsReducer.products,
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
)(Category);
