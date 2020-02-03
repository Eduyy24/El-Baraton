import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {textColor, fontSize14} from '../../../styles/styles';

/**
 * Componente que renderiza el tarjet ship encargado de representar las opciones de ordenamiento disponible.
 *
 * @param {string} props.title Nombre del tarjet ship
 * @param {() => void} props.onPress Función que consumo el evento touch sobre el tarjet ship
 * @param {string} props.color Color ramdon
 */

export default function OptionOrderShip(props) {
  return (
    <TouchableOpacity
      style={styles.containerShip}
      onPress={props.onPress}
      activeOpacity={0.8}>
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
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
});
