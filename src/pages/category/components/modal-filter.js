import React from 'react';
import {View, Text} from 'react-native';
import ModalCanvas from '../../../components/modal';

export default function ModalFilter(props) {
  const {visibleModal, onPressCloseModal} = props;
  return (
    <ModalCanvas visibleModal={visibleModal}>
      <Text>hola</Text>
    </ModalCanvas>
  );
}
