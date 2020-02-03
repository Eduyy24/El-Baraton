import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import EndButtonCart from './components/end-button-cart';
import SubCategoriesShip from './components/sub-categories-ship';
import Line from '../../components/line';
import CardProduct from './components/card-product';

export default function CategoryLayout(props) {
  const {initialData} = props;
  const renderSectionSubCategory = (data, index) => (
    <FlatList
      data={data}
      horizontal
      renderItem={({item}) => (
        <SubCategoriesShip
          title={item.name}
          onPress={() =>
            props.onPressShipSubCategory(index + 1, item.sublevels)
          }
        />
      )}
    />
  );

  return (
    <View style={styles.container}>
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
          <CardProduct/>
          <CardProduct/>
        </View>
      </View>
      <View style={styles.section2}>
        <View style={styles.sectionRoderBy}>
          <Text>2</Text>
        </View>
        <EndButtonCart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section1: {
    flex: 0.75,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 16,
    elevation: 5,
  },
  section2: {
    flex: 0.25,
  },
  sectionRoderBy: {
    flex: 1,
  },
  sectionSubCategories: {
    paddingHorizontal: 16,
  },
  sectionProducts: {
    flex: 1,
    flexDirection: 'row',
  },
});
