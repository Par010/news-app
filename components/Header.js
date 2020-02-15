import * as React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>NEWS</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 20,
     color: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontFamily: 'monospace',
    fontSize: 20,
    position: 'absolute',
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    top: 0,
    left: 0,
    backgroundColor: '#65587f',
    padding: 8,
    paddingTop: 30,
    zIndex: 1,
    color: '#fff',
    width: '100%',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: 'black',
  },
});

export { Header };
