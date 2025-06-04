import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import Details from '../screens/Details';

export type RootStackParamList = {
  MainTabs: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default RootStack;
