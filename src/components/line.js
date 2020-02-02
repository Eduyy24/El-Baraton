import React from 'react';
import {View, StyleSheet} from 'react-native';

/**
 * Componente para la generación de una linea horizontal al ancho del contendor
 */
export default function Line() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});
