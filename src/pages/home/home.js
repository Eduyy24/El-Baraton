import React, {Component} from 'react';
import HomeLayout from './home-layout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import categoriesFile from '../../resources/categories.json';

class Home extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.setCategoriesStore(categoriesFile.categories);
  }

  onPressCategory = id => {
    const {navigation} = this.props;
    navigation.navigate('Category', {id});
  };

  render() {
    const {categories} = this.props;
    return (
      <HomeLayout
        categories={categories}
        onPressCategory={this.onPressCategory}
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
)(Home);
