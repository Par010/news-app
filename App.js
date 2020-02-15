import * as React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet } from 'react-native';

import { Header, Search } from './components';
import { News } from './views';

export default class App extends React.Component {
  state = { text: '' };
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Search
            value={this.state.text}
            onSearch={text => {
              this.setState({ text: text });
            }}
          />
        </Header>
        <News
          search={this.state.text}
          clearSearch={() => {
            this.setState({ text: '' });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    paddingTop: 38,
    height: '100%',
  },
});
