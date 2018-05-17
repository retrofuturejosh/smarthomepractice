import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './components/Login'
import DeviceMenu from './components/DeviceMenu';
import Plug from './components/Plug';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Devices: DeviceMenu,
    Plug: Plug
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


