import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {textColor, fontSize14} from '../styles/styles';

export default function ButtonBorderLine(props) {
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
    borderWidth: 1,
    borderColor: textColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: textColor,
    fontSize: fontSize14,
    padding: 10,
  },
});
