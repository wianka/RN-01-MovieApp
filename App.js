import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import MovieDetail from './src/screens/MovieDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={MovieDetail} name="MovieDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
