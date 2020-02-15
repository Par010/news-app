import * as React from 'react';
import axios from 'axios';
import { TextInput, View, StyleSheet } from 'react-native';
import { News } from '../views/News';

class Search extends React.Component {
  state = { text: '' };
  componentWillReceiveProps(nextProps) {
    if (this.state.text != nextProps.value) {
      this.setState({ text: nextProps.value });
    }
  }
  render() {
    return (
      <TextInput
        placeholder="Search"
        style={styles.search}
        value={this.state.text}
        onChangeText={text => {
          this.setState({ text });
        }}
        onSubmitEditing={event => {
          this.props.onSearch(this.state.text);
        }}
      />
    );
  }
}

export { Search };

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(46, 49, 49, 0.4)',
    padding: 8,
    borderRadius: 4,
  },
});
