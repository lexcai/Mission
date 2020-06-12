/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Accueil from './Container/Accueil';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from 'react-navigation';

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
