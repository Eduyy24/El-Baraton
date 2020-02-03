import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CategoryLayout from './category-layout';

class Category extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigation, categories} = this.props;
    const {subCategories} = this.state;

    //Extraigo el id de la categoría para consultar toda la información de la misma.
    const id = navigation.getParam('id').toString();
    subCategories.push(categories[id].sublevels);
    this.setState({subCategories});
  }
  state = {
    subCategories: [],
  };

  onPressShipSubCategory = (indexSection, data) => {
    const {subCategories} = this.state;
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
    this.setState({subCategories});
  };

  render() {
    const {subCategories} = this.state;
    return (
      <CategoryLayout
        initialData={subCategories}
        onPressShipSubCategory={this.onPressShipSubCategory}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.productsReducer.categories,
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
