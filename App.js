// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Screen from './screens/HomeScreen'; // assuming you create HomeScreen in a separate file
import VideoScreen from './screens/VideoScreen/VideoScreen';
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import VidScreen from './screens/VidScreen/VidScreen';
import HomeScreen from './screens/HomeScreen';
import SubscriptionScreen from './screens/SubscriptionScreen/SubscriptionScreen';
import YouScreen from './screens/YouScreen/YouScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS, // This adds the slide animation
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Video" component={VidScreen} />
        <Stack.Screen name="You" component={YouScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
