import React from 'react';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {textColor, primaryColor} from '../../../styles/styles';
const {width} = Dimensions.get('window');

/**
 * Componente que renderiza la información del producto con los respectivos controles de editar cantidad,
 * y eliminar el mismo @see{@link CartLayout}
 * @param {Object} props.product Objeto con la información del producto a renderizar.
 */

export default function CardProductCart(props) {
  const {product, onPressMinus, onPressMore, onPressDelete} = props;
  return (
    <View style={styles.container}>
      <View style={styles.contentImage}>
        <Image style={styles.image} source={{uri: product.image}} />
      </View>
      <View style={styles.containername}>
        <Text style={styles.textName}>{product.name}</Text>
        <View style={styles.containerPrice}>
          <Text style={styles.textPrice}>{product.price}</Text>
          <View style={styles.containerButtons}>
            <TouchableOpacity onPress={onPressMinus}>
              <Icon2 name="minuscircle" size={24} color={primaryColor} />
            </TouchableOpacity>
            <Text>{product.multiplier || '1'}</Text>
            <TouchableOpacity onPress={onPressMore}>
              <Icon2 name="pluscircle" size={24} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPressDelete} style={styles.buttonDelete}>
        <Icon2 name="delete" size={24} color={primaryColor} />
      </TouchableOpacity>
    </View>
  );
}
const sizeImage = width * 0.2;
const styles = StyleSheet.create({
  buttonDelete: {
    position: 'absolute',
    top: 5,
    right: 0,
  },
  containerButtons: {
    width: 85,
    height: 35,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPrice: {fontSize: 20, fontWeight: 'bold', marginHorizontal: 5},
  containername: {flex: 1, justifyContent: 'space-between'},
  textName: {fontSize: 22, marginHorizontal: 5, color: textColor},
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 3,
    paddingLeft: 3,
  },
  contentImage: {
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: sizeImage,
    height: sizeImage,
    backgroundColor: '#f1eff0',
  },
  imageCommerce: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1eff0',
  },
});
