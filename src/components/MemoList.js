import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const dateString = (date) => date?.toDate().toISOString(date).split('T')[0];

class MemoList extends React.Component {
  renderMemo(memo) {
    const { props } = this;
    console.log(memo);
    return (
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('MemoDetail', { memo });
        }}
      >
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{memo.body.substring(0, 10)}</Text>
          <Text style={styles.memoDate}>{dateString(memo.create_on)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { props } = this;
    console.log(props.memoList);
    if (props.memoList.length === 0) return null;

    return (
      <View style={styles.memoList}>
        <FlatList
          data={props.memoList}
          renderItem={({ item }) => this.renderMemo(item)}
        />
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
