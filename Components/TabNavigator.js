import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tchat" component={Tchat} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs();

// J'en etais la lorsque tout c'est arreté