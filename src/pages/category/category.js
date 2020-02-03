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
  };

  componentDidMount() {
    const {navigation, categories, products} = this.props;
    const {subCategories} = this.state;

    //se extrae el id de la categoría para consultar toda la información de la misma.
    const id = navigation.getParam('id');
    subCategories.push(categories[id].sublevels);
    this.setState({
      subCategories,
      productsShow: products.filter(product => product.sublevel_id === id),
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

    this.setState({
      subCategories,
      productsShow: products.filter(product => product.sublevel_id === id),
    });
  };

  render() {
    const {subCategories, productsShow} = this.state;
    return (
      <CategoryLayout
        initialData={subCategories}
        onPressShipSubCategory={this.onPressShipSubCategory}
        productsShow={productsShow}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.productsReducer.categories,
    products: state.productsReducer.products,
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
