import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '../DrawerContent';
import ClockScreen from './main/ClockScreen';
import MusicScreen from './main/MusicScreen';
import CalculatorScreen from './main/CalculatorScreen';
import PlannerScreen from './main/PlannerScreen';
import RankScreen from './main/RankScreen';
import AboutScreen from './main/AboutScreen';
import LuckyScreen from './main/LuckyScreen';

const Drawer = createDrawerNavigator();

export default function MainScreen({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Clock"
      edgeWidth={10000}
      drawerType="back"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Lucky"
        component={LuckyScreen}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen name="Clock" component={ClockScreen} />
      <Drawer.Screen name="Music" component={MusicScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      <Drawer.Screen name="Planner" component={PlannerScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen
        name="Rank"
        component={RankScreen}
        options={{unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
}
