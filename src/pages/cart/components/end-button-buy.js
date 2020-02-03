import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {secundaryColor, general} from '../../../styles/styles';

/**
 * Componente con la interfaz del boton final para la vizualización del numero de productos agregados al carrito
 * y el redireccionamiento a dicha pagina
 *
 * @param {() => void} props.onPress Función que se consume al presionar el botón
 * @param {number} props.title título del boton
 */
export default function EndButtonBuy(props) {
  return (
    <TouchableOpacity style={styles.containerbutton} onPress={props.onPress}>
      <Text style={styles.text}>{props.title || ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerbutton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secundaryColor,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  text: {
    color: 'white',
    ...general.medium14,
  },
});
