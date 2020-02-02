import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CategoryLayout from './category-layout';

class Category extends Component {
  componentDidMount() {
    const {navigation} = this.props;

    //Extraigo el id de la categoría para consultar toda la información de la misma.
    const id = navigation.getParam('id').toString();
  }
  render() {
    return <CategoryLayout />;
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
