import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator  } from 'react-navigation';

import VideoList from './app/Components/VideoList';
import VideoDetails from './app/Components/VideoDetails';

import InAppBrowser from './app/Components/InAppBrowser';

const AppNavigator = createStackNavigator({
  
  VideoList: {
    screen: VideoList,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },


  VideoDetails: {
    screen: VideoDetails,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },

  InAppBrowser: {
    screen: InAppBrowser,
    navigationOptions: {
      title: "",
      header: null, 
      navigationBar: null
    },
  },

  


});



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
