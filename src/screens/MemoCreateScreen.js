import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  handlePress() {
    // const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
      .add({
        body: this.state.body,
        create_on: new Date(),
      })
      .then(() => {
        // console.log('Document written with ID: ', docRef.id);
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log('Error adding document: ', error);
      });
    // this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoCreateInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => this.setState({ body: text })}
        />

        <CircleButton
          name="check"
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
  },
  memoCreateInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;
