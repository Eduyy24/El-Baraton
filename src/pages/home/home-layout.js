import React from 'react';
import BaseBackground from '../../components/background-base';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {general, textColor} from '../../styles/styles';
import CardCategory from './components/card-category';


export default function HomeLayout() {
  return (
    <BaseBackground>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>El baratón</Text>
        <Text style={styles.textSubTitle}>¡Los mejores precios!</Text>
      </View>
      <View style={styles.containerCategories}>
        <Text style={styles.textCategories}>Categorias</Text>
        <ScrollView>
          <CardCategory />
        </ScrollView>
      </View>
    </BaseBackground>
  );
}

const styles = StyleSheet.create({
  textCategories: {
    color: textColor,
    ...general.medium20,
    marginVertical: 10,
    textAlign: 'center',
  },
  containerTitle: {
    alignItems: 'center',
    marginVertical: 24,
  },
  textTitle: {
    ...general.medium48,
    color: 'white',
  },
  textSubTitle: {
    ...general.medium20,
    color: 'white',
  },
  containerCategories: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 5,
  },
});
