import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('MemoCreate', {
      currentUser: params.currentUser,
    });
    // this.props.navigation.navigate('MemoCreate', {
    //   currentUser: params.currentUser,
    // });
  }

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <MemoList navigation={props.navigation} />
        <CircleButton
          name="plus"
          onPress={() => {
            this.handlePress();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
