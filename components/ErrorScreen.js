import * as React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from 'react-native';

const ErrorScreen = props => {
  return (
    <View style={styles.errorScreen}>
      <Text style={styles.text}>{props.text}</Text>
      <Button
        color='#65587f'
        title={props.buttonText}
        onPress={() => props.onClick()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorScreen: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
  },
  text: {
    marginBottom: 20,
  },
});

export { ErrorScreen };
