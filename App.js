import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import SampleImages from './screens/images';
import Countries from './screens/countries';
import CardView from './screens/card';
import MemberView from './screens/members';


function FirstActivity({ navigation }) {
  return (
    <SampleImages/>
  );
}

function SecondActivity() {
  return (
	<Countries/>
  );
}

function ThirdActivity() {
  return (
    <CardView/>
  );
}

function FourthActivity() {
  return (
    <MemberView/>
  );
}


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
    >
      <Drawer.Screen name="FirstActivity" component={FirstActivity} />
      <Drawer.Screen name="SecondActivity" component={SecondActivity} />
      <Drawer.Screen name="ThirdActivity" component={ThirdActivity} />
      <Drawer.Screen name="FourthActivity" component={FourthActivity} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}