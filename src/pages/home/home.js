import React, {Component} from 'react';
import HomeLayout from './home-layout';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import categoriesFile from '../../resources/categories.json';
import productsFile from '../../resources/products.json';

/**
 * Pagina encargada de renderizar la primera vista de la aplicación, permitiendo la visualización
 * de las categorias principales dentro del inventario de productos del cliente, dichas categorias y productos se
 * consumen de un archivo .JSON suministrado. Esta informacíon es persistida en el store de redux,
 * para su respectiva manipulación
 */

class Home extends Component {
  /**
   * Al iniciar la aplicación se carga la información de los archivos al store de redux, usando las acciones
   * definidas para esto.
   */
  componentDidMount() {
    const {actions} = this.props;
    actions.setCategoriesStore(categoriesFile.categories);
    actions.setProductStore(productsFile.products);
  }

  /**
   * Función que redirecciona a la página de Category para manipular la información de la misma,
   * pasando el "id" de la categoria como parametro.
   */
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

// mapea el estado global a la propiedades locales de la pagina
function mapStateToProps(state) {
  return {
    categories: state.productsReducer.categories,
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
)(Home);
