import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsMap from '../../actions/actions';
import CategoryLayout from './category-layout';
import ModalFilter from './components/modal-filter';

/**
 * Pagina encargada de la visualización de la categoría seleccionada, y gestión de la mismas,
 * como poder visualizar la sub-categorías de esta, ver los productos asociados a la categoría y sub-categorías,
 * asi como tambien, ordenar y filtrar los productos.
 */
class Category extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    subCategories: [],
    productsShow: [],
    visibleModal: false,
  };

  componentDidMount() {
    const {navigation, categories, products} = this.props;
    const {subCategories} = this.state;

    //se extrae el id de la categoría para consultar toda la información de la misma.
    const id = navigation.getParam('id');
    subCategories.push(categories[id].sublevels);

    // filtrado inicial de los productos de la categoría
    const productsFiltered = products.filter(
      product => product.sublevel_id === id,
    );
    this.setState({
      subCategories,
      productsShow: productsFiltered,
    });
  }

  /**
   * Genera secciones de sub-categorías una debajo de la otra en función de las sub-categorias asociadas
   * a las mismas sub-categorías, este comportamiento es dianamico y puede generar cuantos niveles tengan asociados
   * las sub-categorias.
   * @param {number} id id de la subcategoria
   * @param {number} indexSection identificador de la sección desde la cual se generó el evento
   * @param {Array} data Array con los objetos de las sub-categorias a insertar o remplazar en la nueva sección
   */
  onPressShipSubCategory = (id, indexSection, data) => {
    const {subCategories} = this.state;
    const {products} = this.props;
    // Se inserta la sección de sub-categoría o se reemplaza si ya existe
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
    // se eliminan la secciones de subcategorias que no pertenecen a la opción seleccionada
    if (subCategories[indexSection + 1]) {
      for (var i = indexSection + 1; i < subCategories.length; i++) {
        subCategories.splice(i, 1);
      }
    }

    // Se filtran de la lista de productos los asociados a la sub-categoría seleccionada
    const productsFiltered = products.filter(
      product => product.sublevel_id === id,
    );
    this.setState({
      subCategories,
      productsShow: productsFiltered,
    });
  };

  /**
   * Función que ordena los productos tomando como parametro el tipo de boton presionado,
   * dichos metodos de ordenamiento son de manera ascendente
   * @param {string} type Tipo de ordenamiento.
   */
  onPressOrder = type => {
    var {productsShow} = this.state;
    switch (type) {
      case 'price':
        productsShow = productsShow.sort((a, b) => {
          const value1 = a.price.replace('$', '').replace(',', '');
          const value2 = b.price.replace('$', '').replace(',', '');
          return value1 - value2;
        });
        break;
      case 'available':
        productsShow = productsShow.sort((a, b) => {
          return b.available - a.available;
        });
        break;
      case 'quantity':
        productsShow = productsShow.sort((a, b) => {
          return a.quantity - b.quantity;
        });
        break;
    }
    this.setState({productsShow});
  };

  /** Muestra el modal con las opciones de filtrado */
  onPressfilter = () => {
    this.setState({visibleModal: true});
  };

  /** Oculta el modal con las opciones de filtrado */
  onPressCloseModal = () => {
    this.setState({visibleModal: false});
  };

  /**
   * Agrega el producto al array de productos del carrito de compras, y los actualiza en el store
   * @param {Object} product producto a agregar al carrito de compras
   */
  onPressAddCart = product => {
    const {actions, cart} = this.props;
    //Se agrega el atributo multiplier para la gestión de la cantidad de productos en la page de Cart
    cart.push({...product, multiplier: 1});
    actions.setProductCartStore(cart);
    this.setState({productsShow: this.state.productsShow}); //obligar a hacer re-render
  };

  /**Función que actualiza la lista de productos a mostrar despues de ser filtrados */
  onPressFilterModal = products => {
    this.setState({productsShow: products});
    this.onPressCloseModal();
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

// mapea el estado global a la propiedades locales de la pagina
function mapStateToProps(state) {
  return {
    categories: state.productsReducer.categories,
    products: state.productsReducer.products,
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
)(Category);
