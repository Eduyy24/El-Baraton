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

export default function CardProductCart(props) {
  const {product, onPressMinus, onPressMore, multiplier} = props;
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
            <Text>{multiplier || '0'}</Text>
            <TouchableOpacity onPress={onPressMore}>
              <Icon2 name="pluscircle" size={24} color={primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const sizeImage = width * 0.2;
const styles = StyleSheet.create({
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
