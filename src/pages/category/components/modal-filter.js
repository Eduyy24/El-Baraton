import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ModalCanvas from '../../../components/modal';
import {
  textColor,
  fontSize20,
  fontSize16,
  fontSize14,
  primaryColor,
} from '../../../styles/styles';
import ButtonBorderLine from '../../../components/button-border-line';
import Slider from '@react-native-community/slider';
import Button from '../../../components/button';
import {formatMoney} from '../../../utils/utils';

/**
 * Componente que renderiza y controla la lógica detras de las opciones de filtrado,
 * por rango cantidad de productos, rango de precio y productos disponibles, para la implementación de los rangos
 * se usó un slider
 * @param {function} props.onPressFilterModal Función que recibe los productos filtrados @see{@Link Category}
 * @param {Array} props.product Array con los productos desplegados en la vista para ser filtrados.
 */
export default class ModalFilter extends PureComponent {
  state = {
    stateBtnAvailable: false,
    stateBtnNoAvailable: false,
    quantity: 0,
    price: 0,
  };

  /** Controla el estado activo o incativo de los botones para filtrar por disponibilidad
   * @param {string} idBtn Tipo del boton prescionado
   */

  onPressButton = idBtn => {
    if (idBtn === 'available') {
      this.setState({stateBtnAvailable: true, stateBtnNoAvailable: false});
    } else {
      this.setState({stateBtnAvailable: false, stateBtnNoAvailable: true});
    }
  };

  /**Lisener del slider de Cantidad
   * @param {string} cant Valor retornado por el Slider
   */
  onChangeQuantity = cant => {
    this.setState({quantity: parseInt(cant, 10)});
  };

  /**Lisener del slider de Precio
   * @param {string} cant Valor retornado por el Slider
   */
  onChagePrice = cant => {
    this.setState({price: parseInt(cant, 10)});
  };

  /**
   * Función encargar de aplicar los filtros una vez es presionado el boton "FILTRAR", el efecto de los
   * filtros es acumulable.
   */
  onPressFilter = () => {
    let {onPressFilterModal, products} = this.props;
    const {
      stateBtnAvailable,
      stateBtnNoAvailable,
      quantity,
      price,
    } = this.state;

    // Si existe algun botón de disponibilidad habilitado se aplicara el filtro
    if (stateBtnAvailable) {
      products = products.filter(product => product.available);
    } else if (stateBtnNoAvailable) {
      products = products.filter(product => !product.available);
    }
    // En caso de que exista un valor para la cantidad se filtran los valores menores o iguales a este
    if (quantity !== 0) {
      products = products.filter(product => {
        return product.quantity <= quantity;
      });
    }

    // En caso de que exista un valor para el precio se filtran los valores menores o iguales a este
    if (price !== 0) {
      products = products.filter(product => {
        const priceFormat = product.price.replace('$', '').replace(',', '');
        return parseInt(priceFormat, 10) <= price;
      });
    }

    onPressFilterModal(products);
  };

  render() {
    const {visibleModal, onPressCloseModal} = this.props;
    const {
      stateBtnAvailable,
      stateBtnNoAvailable,
      price,
      quantity,
    } = this.state;
    return (
      <ModalCanvas visibleModal={visibleModal}>
        <TouchableOpacity style={styles.flex} onPress={onPressCloseModal} />
        <View style={styles.containerFilter}>
          <Text style={styles.textFilter}>Filtrar por</Text>
          <Text style={styles.textAvailable}>Disponibilidad</Text>
          <View style={styles.containerButtonAvailable}>
            <ButtonBorderLine
              title="Disponible"
              state={stateBtnAvailable}
              onPress={() => this.onPressButton('available')}
            />
            <ButtonBorderLine
              title="No disponible"
              state={stateBtnNoAvailable}
              onPress={() => this.onPressButton('no-available')}
            />
          </View>
          <Text style={styles.textAvailable}>Cantidad</Text>
          <Text style={styles.textCant}>{quantity}</Text>
          <View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000}
              minimumTrackTintColor={primaryColor}
              thumbTintColor={primaryColor}
              onValueChange={this.onChangeQuantity}
              value={quantity}
            />
          </View>
          <Text style={styles.textAvailable}>Precio</Text>
          <Text style={styles.textCant}>{formatMoney(price)}</Text>
          <View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={50000}
              minimumTrackTintColor={primaryColor}
              thumbTintColor={primaryColor}
              onValueChange={this.onChagePrice}
              value={price}
            />
          </View>
          <View style={{marginTop: 16}}>
            <Button title="Filtrar" onPress={this.onPressFilter} />
          </View>
        </View>
      </ModalCanvas>
    );
  }
}

const styles = StyleSheet.create({
  textCant: {
    color: textColor,
    fontSize: fontSize14,
    textAlign: 'center',
  },
  slider: {width: '100%', height: 40},
  containerButtonAvailable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  flex: {
    flex: 1,
  },
  containerFilter: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  textFilter: {
    color: textColor,
    textAlign: 'center',
    fontSize: fontSize20,
  },
  textAvailable: {
    color: textColor,
    fontSize: fontSize16,
    marginVertical: 10,
  },
});
