import {createStackNavigator} from 'react-navigation-stack';
import Home from './pages/home/home';
import Category from './pages/category/category';
import Cart from './pages/cart/cart';

const Main = createStackNavigator(
  {
    Home,
    Category,
    Cart,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      gesturesEnabled: true,
    },
    navigationOptions: {
      cardStyle: {
        opacity: 1,
        backgroundColor: 'white',
      },
    },
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Home',
  },
);

export default Main;
