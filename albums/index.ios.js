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
  <View style={{ flex: 1 }}>
    <Header headertext='Albums' />
    <AlbumList />
  </View>
);

// Render to device
AppRegistry.registerComponent('albums', () => App);

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Button,
//   View
// } from 'react-native';
//
// export default class albums extends Component {
//   hue() {
//
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Hello world.
//         </Text>
//         <View style={styles.buttonContainer}>
//           <Button
//           title='A button' onPress={this.hue} style={styles.button}
//           />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   buttonContainer: {
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: '#2E9298',
//     backgroundColor: '#2E9298'
//   },
//   button: {
//     color: 'white',
//     backgroundColor: 'white'
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('albums', () => albums);
