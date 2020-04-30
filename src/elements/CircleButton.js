import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  { pencil: '\uf303', plus: '\uf067' },
  'FontAwsome'
);
// expoAssetId

class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { props, state } = this;
    const { style, color, name } = props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.CircleBotton, style, { backgroundColor: bgColor }]}>
        {state.fontLoaded ? (
          <CustomIcon
            name={name}
            style={[styles.CircleBottonTitle, { color: textColor }]}
          />
        ) : null}
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
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 24,
  },
});
