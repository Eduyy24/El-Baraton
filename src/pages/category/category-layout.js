import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EndButtonCart from './components/end-button-cart';
import SubCategoriesShip from './components/sub-categories-ship';

export default function CategoryLayout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <SubCategoriesShip />
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
});
