import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class MemoList extends React.Component {
  render() {
    const { props } = this;
    return (
      <View style={styles.memoList}>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate('MemoDetail');
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/01/01</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate('MemoDetail');
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/01/01</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate('MemoDetail');
          }}
        >
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2020/01/01</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default MemoList;

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});
