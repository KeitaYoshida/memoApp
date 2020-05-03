import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // eslint-disable-next-line
  handleSubmit(navigation) {
    // navigation.navigate('MemoList');
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        // console.log('success', user);
        const resetActions = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'MemoList' })],
        });
        navigation.dispatch(resetActions);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });

    // log in
  }

  render() {
    const { props } = this;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Passwordd"
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.botton}
          onPress={() => {
            this.handleSubmit(props.navigation);
          }}
          underlayColor="#C70F66"
        >
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  botton: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupScreen;
