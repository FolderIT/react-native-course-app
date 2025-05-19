import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

export type TabParamList = {
    Home: undefined;
    Cart: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
    <Tab.Screen name="Cart" component={Cart} options={{ title: 'Profile' }} />
  </Tab.Navigator>
);

export default MainTabs;
