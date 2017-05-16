// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.headertext}</Text>
    </View>
  );
};

// styles
const styles = {
  textStyle: {
    fontSize: 20,
    color: 'white'
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#40c4ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make this component available to other parts of the app.
export default Header;
