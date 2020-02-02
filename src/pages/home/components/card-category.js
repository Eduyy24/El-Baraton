import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {general} from '../../../styles/styles';
const {height} = Dimensions.get('window');

/**
 * Este componente define la interfaz de los elementos categoria definidos en el mockup presentado,
 * que le permite al usuario acceder  e interactuar con la información de la misma.
 *
 * @see {https://xd.adobe.com/view/6362b65a-1893-4949-4a9c-9489780dff10-1553/grid}
 * @param {string} uriImage = Url de la imagen representativa de la categoría @implements
 * @param {string} title = Nombre de la categoría @implements
 * @param {function} onPress = Función que resuelve el touch del usuario @implements
 */

export default function CardCategory(props) {
  return (
    <TouchableOpacity style={styles.containerCard} activeOpacity={0.8}>
      <Image source={{uri: props.uriImage}} style={styles.imageCard} />
      <Text style={styles.textCategory}>{props.title || ''}</Text>
    </TouchableOpacity>
  );
}

const heightCard = height * 0.2;
const styles = StyleSheet.create({
  containerCard: {
    height: heightCard,
  },
  imageCard: {
    height: heightCard,
  },
  textCategory: {
    ...general.medium20,
    color: 'white',
    position: 'absolute',
    top: heightCard / 2.5,
    left: 16,
  },
});
