import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';

/* import DetailsScreen from '../screens/Common/DetailsScreen'; */

export type RootStackParamList = {
  MainTabs: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={MainTabs} />
    {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
  </Stack.Navigator>
);

export default RootStack;
