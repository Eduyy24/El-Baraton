import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {generateBackColor, textColor, fontSize14} from '../../../styles/styles';

/**
 * Componente que renderiza el tarjet ship encargado de representar las sub categorías de cada producto.
 *
 * @param {string} props.title Nombre del tarjet ship
 * @param {() => void} props.onPress Función que consumo el evento touch sobre el tarjet ship
 */

export default function SubCategoriesShip(props) {
  return (
    <TouchableOpacity
      style={styles.containerShip}
      onPress={props.onPress}
      activeOpacity={0.5}>
      <Text style={styles.text}>{props.title || ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerShip: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: textColor,
    fontSize: fontSize14,
    backgroundColor: generateBackColor(),
    padding: 10,
    margin: 10,
    borderRadius: 20,
    elevation: 3,
  },
});
