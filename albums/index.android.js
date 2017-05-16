import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View>
    <Header headertext='Albums' />
    <AlbumList />
  </View>
);

// Render to device
AppRegistry.registerComponent('albums', () => App);
