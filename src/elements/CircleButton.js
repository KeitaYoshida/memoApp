import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet(
  { pencil: '\uf303', plus: '\uf067', check: '\uf00c' },
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
    const { style, color, name, onPress } = props;
    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.container, style]}>
        <TouchableHighlight
          onPress={onPress}
          style={[styles.CircleBotton, { backgroundColor: bgColor }]}
          underlayColor="transparent"
        >
          {state.fontLoaded ? (
            <CustomIcon
              name={name}
              style={[styles.CircleBottonTitle, { color: textColor }]}
            />
          ) : null}
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 58,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  CircleBotton: {
    width: 48,
    height: 48,
    borderRadius: 50,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  CircleBottonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
