import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {textColor, fontSize48} from '../../styles/styles';
import CardProductCart from './components/card-products-cart';
import EndButtonBuy from './components/end-button-buy';
import Line from '../../components/line';

/**
 * Componente que renderiza la vista de la pagina de carrito de compras
 * @param {Array} props.dataCart Array de objetos de producto
 * @param {function} props.onPressMore Función para el consumo del botón "+" en CardProductCart
 * @param {function} props.onPressMinus Función para el consumo del botón "-" en CardProductCart
 * @param {function} props.onPressDelete Función para el consumo del botón "eliminar"
 * @param {function} props.onPressBuy Función para el consumo del boton "Comprar"
 */
export default function CartLayout(props) {
  const {
    dataCart,
    onPressBuy,
    onPressMore,
    onPressMinus,
    onPressDelete,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textCart}>Carrito</Text>
      <View style={styles.containerProductCart}>
        <FlatList
          data={dataCart}
          renderItem={({item, index}) => (
            <CardProductCart
              product={item}
              onPressMore={() => onPressMore(index)}
              onPressMinus={() => onPressMinus(index)}
              onPressDelete={() => onPressDelete(index)}
            />
          )}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <Line />}
        />
      </View>
      <EndButtonBuy title="COMPRAR" onPress={onPressBuy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCart: {
    color: textColor,
    fontSize: fontSize48,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  containerProductCart: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
