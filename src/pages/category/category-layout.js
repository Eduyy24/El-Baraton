import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EndButtonCart from './components/end-button-cart';
import SubCategoriesShip from './components/sub-categories-ship';
import Line from '../../components/line';
import CardProduct from './components/card-product';
import {textColor, general, primaryColor} from '../../styles/styles';
import OptionOrderShip from './components/option-order-chip';

export default function CategoryLayout(props) {
  const {
    initialData,
    productsShow,
    onPressfilter,
    onPressAddCart,
    numProductCart,
    onPressOrder,
    onPressgoToCart,
    modalFilter,
  } = props;

  const renderSectionSubCategory = (data, index) => (
    <FlatList
      data={data}
      horizontal
      renderItem={({item}) => (
        <SubCategoriesShip
          title={item.name}
          onPress={() =>
            props.onPressShipSubCategory(item.id, index + 1, item.sublevels)
          }
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
      {modalFilter}
      <View style={styles.section1}>
        <View style={styles.sectionSubCategories}>
          <FlatList
            data={initialData}
            renderItem={({item, index}) =>
              renderSectionSubCategory(item, index)
            }
            ItemSeparatorComponent={() => <Line />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.sectionProducts}>
          <FlatList
            data={productsShow}
            renderItem={({item}) => (
              <CardProduct
                product={item}
                onPressAddCart={() => onPressAddCart(item)}
              />
            )}
            extraData={productsShow}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{alignItems: 'center'}}
          />
          <TouchableOpacity style={styles.filterButton} onPress={onPressfilter}>
            <Icon name="filter-variant" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section2}>
        <View style={styles.sectionRoderBy}>
          <Text style={styles.textOrderBy}>Ordenar por</Text>
          <View style={styles.containerOptionsOrder}>
            <OptionOrderShip
              title="Precio"
              onPress={() => onPressOrder('price')}
            />
            <OptionOrderShip
              title="Disponibilidad"
              onPress={() => onPressOrder('available')}
            />
            <OptionOrderShip
              title="Cantidad"
              onPress={() => onPressOrder('quantity')}
            />
          </View>
        </View>
        <EndButtonCart numProducts={numProductCart} onPress={onPressgoToCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 0.8,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 16,
    elevation: 5,
  },
  section2: {
    flex: 0.2,
  },
  sectionRoderBy: {
    flex: 1,
    padding: 16,
  },
  sectionSubCategories: {
    paddingHorizontal: 16,
  },
  sectionProducts: {
    flex: 1,
    flexDirection: 'row',
  },
  textOrderBy: {
    color: textColor,
    ...general.medium14,
    textAlign: 'center',
  },
  containerOptionsOrder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filterButton: {
    position: 'absolute',
    right: 10,
    bottom: 50,
    backgroundColor: primaryColor,
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
