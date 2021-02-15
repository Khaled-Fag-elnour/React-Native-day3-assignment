import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeStack } from './components/homeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from './components/profile';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <TabNavigator tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#212529',
        activeBackgroundColor: '#3f2b96',
        inactiveBackgroundColor: '#fff'
      }} initialRouteName='home' backBehavior='history'>
        <TabScreen options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => <AntDesign name="home" size={focused ? 28 : 24} color={color} />
        }} name="home" component={HomeStack} />
        <TabScreen options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) => <AntDesign name="profile" size={focused ? 28 : 24} color={color} />
        }} name="profile" component={Profile} />
      </TabNavigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
