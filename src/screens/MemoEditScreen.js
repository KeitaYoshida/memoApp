import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: undefined,
      key: undefined,
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ body: params?.memo.body, key: params?.memo.key });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
      .doc(this.state.key)
      .update({
        body: this.state.body,
        created_on: firebase.firestore.Timestamp.now(),
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          created_on: firebase.firestore.Timestamp.now(),
        });
      })
      .catch(() => {});

    this.props.navigation.goBack();
  }

  render() {
    if (!this.state) return null;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => this.setState({ body: text })}
          textAlignVertical="top"
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
  memoEditInput: {
    backgroundColor: '#ddd',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;
