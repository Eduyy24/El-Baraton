import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EndButtonCart from './components/end-button-cart';

export default function CategoryLayout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text>1</Text>
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
    flex: 0.7,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 16,
    elevation: 5,
  },
  section2: {
    flex: 0.3,
  },
  sectionRoderBy: {
    flex: 1,
  },
});
