/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavRouters from "./components/navRouters";
export default class App extends Component<{}> {
  render() {
    return (
            <NavRouters></NavRouters>
    );
  }
}

