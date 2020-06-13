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

// Ca c'etait un test pour la barre de navigation mais c'est quands je l'ai fait que je me suis rendu compte que c'etait un menu stack et donc pas ce qui fallait pour l'exercice