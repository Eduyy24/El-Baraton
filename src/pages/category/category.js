import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CategoryLayout from './category-layout';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    subCategories: [],
    productsShow: [],
    auxProductsShow: [],
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

  onPressfilter = type => {
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

  onPressAddCart = product => {
    const {actions} = this.props;
    actions.setProductCartStore(product);
    //actions.cleanProducCarttStore();
  };

  render() {
    const {subCategories, productsShow} = this.state;
    const {cart} = this.props;
    return (
      <CategoryLayout
        initialData={subCategories}
        onPressShipSubCategory={this.onPressShipSubCategory}
        productsShow={productsShow}
        onPressfilter={this.onPressfilter}
        onPressAddCart={this.onPressAddCart}
        numProductCart={cart.length}
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
