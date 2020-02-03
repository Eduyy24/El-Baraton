import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {textColor, fontSize14, primaryColor} from '../styles/styles';

/**
 * Componente que renderiza un boton de color blacon con bordes de color, con dos estados, habilitado y des habilitado
 * @param {string} props.title Titulo del botón
 * @param {function} props.onPress Evento de touch sobre el botón
 * @param {boolean} props.state Estado del boton
 */
export default function ButtonBorderLine(props) {
  const {title, onPress, state} = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.containerButton,
        borderColor: state ? primaryColor : textColor,
      }}
      onPress={onPress}>
      <Text
        style={{...styles.textButton, color: state ? primaryColor : textColor}}>
        {title.toUpperCase() || ''}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: fontSize14,
    padding: 10,
  },
});
