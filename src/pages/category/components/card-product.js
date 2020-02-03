import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatMoney} from '../../../utils/utils';
import {textColor, general, primaryColor} from '../../../styles/styles';
const {width} = Dimensions.get('window');

/**
 * Componente que renderiza la información del producto con las funcionalidades definidas en el diseño.
 *
 * @param {Object} props.product Informacion dle producto a renderizar
 * @param {funcion} props.onPressAddCart Función Función @see{@Link Category}
 */
export default function CardProduct(props) {
  const {product, onPressAddCart} = props;

  const CheckComponent = propsCheck => (
    <View style={styles.containerCheck}>
      {propsCheck.enable ? (
        <Icon name="check-circle-outline" size={24} color="green" />
      ) : (
        <Icon name="close-circle-outline" size={24} color="red" />
      )}
    </View>
  );

  return (
    <View style={styles.containerCard}>
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{product.name || ''}</Text>
      <Text style={styles.text}>{formatMoney(product.price)}</Text>
      <Text style={styles.text}>Stok: {product.quantity || '0'}</Text>
      <CheckComponent enable={product.available} />
      <TouchableOpacity style={styles.addCartButton} onPress={onPressAddCart}>
        <Icon name="cart-plus" size={24} color={primaryColor} />
      </TouchableOpacity>
    </View>
  );
}

const sizeImage = width * 0.4;
const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: 'white',
    elevation: 3,
    width: sizeImage,
    height: sizeImage * 1.4,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: sizeImage,
    height: sizeImage,
  },
  text: {
    ...general.medium14,
    color: textColor,
    marginLeft: 5,
  },
  containerCheck: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  addCartButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
