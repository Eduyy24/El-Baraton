import numeral from 'numeral';
import {Alert} from 'react-native';

export const formatMoney = number => numeral(number).format('$ #, ## 0');

export const alertError = msg =>
  Alert.alert('Error', msg, [{text: 'OK'}], {cancelable: false});
