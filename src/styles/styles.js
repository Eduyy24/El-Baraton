import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

/**
 * Se agregan estilos y/o configuraciones de interfaz globales para uso generalizado
 */

export const fontSize12 = width * 0.028;
export const fontSize14 = width * 0.033;
export const fontSize16 = width * 0.0378;
export const fontSize20 = width * 0.0465;
export const fontSize24 = width * 0.0555;
export const fontSize48 = width * 0.114;

export const backgroundColor = '#D2D5DD';
export const primaryColor = '#999AC6';
export const textColor = '#82816D';

export const general = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: 'red',
    borderWidth: 0.5,
  },
  medium12: {
    fontSize: fontSize12,
    fontWeight: '500',
  },
  medium14: {
    fontSize: fontSize14,
    fontWeight: '500',
  },
  medium16: {
    fontSize: fontSize16,
    fontWeight: '500',
  },
  medium20: {
    fontSize: fontSize20,
    fontWeight: '500',
  },
  medium24: {
    fontSize: fontSize24,
    fontWeight: '500',
  },
  medium48: {
    fontSize: fontSize48,
    fontWeight: '500',
  },
});
