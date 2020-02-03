import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import {backgroundColor, primaryColor} from '../styles/styles';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

/**Componente con la configuracion general de las paginas, se usa como padre de las mismas */
export default function BaseBackground(props) {
  const {behavior, children} = props;
  return (
    <KeyboardAvoidingView
      behavior={behavior || 'height'}
      keyboardVerticalOffset={Platform.OS === 'android' ? -35 : 0}>
      <DismissKeyboard>
        <ImageBackground style={styles.image} source={{}}>
          <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
          <View style={styles.container}>{children}</View>
        </ImageBackground>
      </DismissKeyboard>
    </KeyboardAvoidingView>
  );
}

const styles = {
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor,
  },
  container: {
    flex: 1,
  },
};
