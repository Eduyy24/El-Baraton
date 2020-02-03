import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {textColor, fontSize14, extraColor} from '../styles/styles';

export default function Button(props) {
  const {title, onPress} = props;
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onPress}>
      <Text style={styles.textButton}>{title.toUpperCase() || ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    borderRadius: 10,
    backgroundColor: extraColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: textColor,
    fontSize: fontSize14,
    padding: 10,
  },
});
