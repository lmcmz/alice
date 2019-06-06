/**
 * @format
 */

import React, { Component } from 'react';
import {
  Dimensions,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Apps, { Fork } from './src/Apps'

/**
 * @format
 */

import { navigate } from "./src/utils/navigationWrapper";


import NavigatorService from './src/utils/navigationWrapper';
import Icon from "./src/Components/IconComponent";


import { createMaterialTopTabNavigator } from 'react-navigation'

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab Navigator Tutorial 2!</Text>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const AppTabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon icon="ChatGrey" color={tintColor} size={40} />
      )
    }
  },
  Apps: {
    screen: Apps,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon icon="HomeGrey" color={tintColor} size={40} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Icon icon="AvatarGrey" color={tintColor} size={40} />
      )
    }
  }
}, {
  initialRouteName: 'Apps',
  order: ['Home', 'Apps', 'Settings'],
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    backgroundColor: 'white',
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    labelStyle: {},
    allowFontScaling: true,
    activeTintColor: '#31FF00',
    inactiveTintColor: '#fff',
    style: {
      backgroundColor: 'transparent',
      borderTopWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    // indicatorStyle: {
    //   height: 0
    // },
    showIcon: true
  },
})

const MainApp = createStackNavigator({
  Apps: { screen: AppTabNavigator },
  Fork: { screen: Fork }
}, {
  headerMode: 'none',
});

export const AliceMain = createAppContainer(MainApp);

class LeApps extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      tabBarIcon: ({ tintColor }) => <Icon icon="HomeGrey" size={45}/>,
    };
  };

  componentDidMount() {

  }

  navigate = () => console.log('hello');

  render() {
    return (<Text>Hello</Text>)
  }
}

export default class App extends Component {

  render() {
    return (
      <AliceMain
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
      />
    );
  }
}
// export default class App extends Component {
//
//   render() {
//     return (
//       <LeApps/>
//     );
//   }
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  buttonContainer: {
    height: 400,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 140,
    width: 140,
    borderRadius: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    color: 'white',

  }
});
