import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ModalCanvas from '../../../components/modal';
import {
  textColor,
  fontSize20,
  fontSize16,
  primaryColor,
} from '../../../styles/styles';
import ButtonBorderLine from '../../../components/button-border-line';
import Slider from '@react-native-community/slider';
import Button from '../../../components/button';

export default class ModalFilter extends PureComponent {
  render() {
    const {visibleModal, onPressCloseModal} = this.props;
    return (
      <ModalCanvas visibleModal={visibleModal}>
        <TouchableOpacity style={styles.flex} onPress={onPressCloseModal} />
        <View style={styles.containerFilter}>
          <Text style={styles.textFilter}>Filtrar por</Text>
          <Text style={styles.textAvailable}>Disponibilidad</Text>
          <View style={styles.containerButtonAvailable}>
            <ButtonBorderLine title="Disponible" />
            <ButtonBorderLine title="No disponible" />
          </View>
          <Text style={styles.textAvailable}>Cantidad</Text>
          <View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000}
              minimumTrackTintColor={primaryColor}
              thumbTintColor={primaryColor}
            />
          </View>
          <Text style={styles.textAvailable}>Precio</Text>
          <View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1000}
              minimumTrackTintColor={primaryColor}
              thumbTintColor={primaryColor}
            />
          </View>
          <View style={{marginTop: 16}}>
            <Button title="Filtrar" />
          </View>
        </View>
      </ModalCanvas>
    );
  }
}

const styles = StyleSheet.create({
  slider:{width: '100%', height: 40},
  containerButtonAvailable: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  flex: {
    flex: 1,
  },
  containerFilter: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  textFilter: {
    color: textColor,
    textAlign: 'center',
    fontSize: fontSize20,
  },
  textAvailable: {
    color: textColor,
    fontSize: fontSize16,
    marginVertical: 10,
  },
});
