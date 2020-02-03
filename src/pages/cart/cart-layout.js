import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {textColor, fontSize48} from '../../styles/styles';
import CardProductCart from './components/card-products-cart';
import EndButtonBuy from './components/end-button-buy';

export default function CartLayout(props) {
  const {dataCart, onPressBuy} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textCart}>Carrito</Text>
      <View style={styles.containerProductCart}>
        <FlatList
          data={dataCart}
          renderItem={({item}) => <CardProductCart product={item} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <EndButtonBuy title="COMPRAR" onPress={onPressBuy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCart: {
    color: textColor,
    fontSize: fontSize48,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  containerProductCart: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
