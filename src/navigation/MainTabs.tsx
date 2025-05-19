import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import FIcon from 'react-native-vector-icons/Feather';
import { colors } from '../theme';
import { TouchableOpacity } from 'react-native';

export type TabParamList = {
    Home: undefined;
    Cart: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const MainTabs = () => (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarStyle: {
      backgroundColor: '#fff',
      position: 'absolute',
      height: 65,
      paddingTop: 5,
      borderTopWidth: 1.5,
      borderTopColor: colors.secondary,
    },
    tabBarLabelStyle: {
      fontSize: 12,
    },
    tabBarButton: (props) => <TouchableOpacity {...props} />,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.secondary,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {iconName = 'home';}
      else if (route.name === 'Cart') {iconName = 'shopping-cart';}
      return <FIcon name={iconName} size={size} color={focused ? colors.primary : colors.secondary} />;
    },
    headerShown: false,
  })}>
    <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
    <Tab.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
  </Tab.Navigator>
);

export default MainTabs;
