import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Accueil from '../../Container/Accueil'

const screens = {
  Home: {
      screen: Accueil
  },
  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);