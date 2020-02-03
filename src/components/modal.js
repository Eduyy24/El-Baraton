import React from 'react';
import {Modal, View, StatusBar, StyleSheet} from 'react-native';

export default function ModalCanvas(props) {
  const {visibleModal, children} = props;
  return (
    <Modal transparent visible={visibleModal} animationType="fade">
      <StatusBar backgroundColor="rgba(50, 50, 50,0.4)" />
      <View style={styles.containerModal}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50,0.4)',
  },
});
