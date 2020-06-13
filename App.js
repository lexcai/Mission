/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from 'react-navigation/native';
import Accueil from './Container/Accueil';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Accueil} />
      <Tab.Screen name="Tchat" component={Tchat} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
//le MyTabs je testé a quel endroit je devais le mettre c'est pour ca qui est aussi dans un autre fichier mais j'ai pas pu test" car ca a buger

class App extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
      <MyTabs/>
      </NavigationContainer>
    )
  }
}

export default App;
