import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    const { props } = this;
    return (
      <View>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#DDD',
    backgroundColor: 'black',
  },
});

export default BodyText;
