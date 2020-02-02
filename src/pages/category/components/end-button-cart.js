import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {secundaryColor, general} from '../../../styles/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Componente con la interfaz del boton final para la vizualización del numero de productos agregados al carrito
 * y el redireccionamiento a dicha pagina
 *
 * @param {() => void} props.onPress Función que se consume al presionar el botón
 * @param {number} props.numProducts Números de productos agregados al carrito de compras
 */
export default function EndButtonCart(props) {
  return (
    <TouchableOpacity style={styles.containerbutton} onPress={props.onPress}>
      <View style={general.horizontal}>
        <Icon name="cart-arrow-down" size={24} color="white" />
        <Text style={styles.text}>{props.numProducts || '0'}</Text>
      </View>
      <View style={general.horizontal}>
        <Text style={styles.text}>IR AL CARRITO</Text>
        <Icon name="chevron-right" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerbutton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: secundaryColor,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  text: {
    color: 'white',
    ...general.medium14,
  },
});
