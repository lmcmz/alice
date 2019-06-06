import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import Icon from '../../Components/IconComponent';
// import Deals from './Screens/Deals';
import Menu from './Screens/Menu';
// import TakeAway from './Screens/TakeAway';
import Restaurants from './Screens/Restaurants';
import Confirmation from './Screens/Confirmation';
import CameraComponent from '../../Components/Camera';

let { height, width } = Dimensions.get('window');

const HomeScreen2 = createStackNavigator({
  Home: {
    screen: Restaurants,
  },
  Menu: {
    screen: Menu,
  },
  Camera: {
    screen: CameraComponent
  },
  Confirmation: {
    screen: Confirmation
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    tabBarIcon: ({ tintColor }) => <Icon icon={require('../../Assets/plate.png')} size={25}/>,
  },
});

export default createBottomTabNavigator({
  Home: HomeScreen2,
  // TakeAway: TakeAway,
  // Deals: Deals,
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
      },
      showLabel: false,
    }
  });

const styles = StyleSheet.create({
  inputContainer: {
    width: width - 60,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    shadowColor: '#2f80ed',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  kittyContainer: {
    margin: 10,
    maxWidth: 150,
    backgroundColor: 'white',

  },
});
