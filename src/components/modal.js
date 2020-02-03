import React from 'react';
import {Modal, View, StatusBar, StyleSheet} from 'react-native';

/**
 * Componente genérico con una configuración base para la generación de modals
 * @param {boolean} props.visibleModal Controla el estado de mostrar y ocultar el modal
 * @param {boolean} props.children Componente hijo para ser renderizado dnetro del modal
 */
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
