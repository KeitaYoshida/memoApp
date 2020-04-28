import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { props } = this;
    return (
      <View style={styles.CircleBotton}>
        <Text style={styles.CircleBottonTitle}>{props.children}</Text>
      </View>
    );
  }
}

export default CircleButton;

const styles = StyleSheet.create({
  CircleBotton: {
    position: 'absolute',
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    bottom: 32,
    right: 32,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleBottonTitle: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 32,
  },
});
