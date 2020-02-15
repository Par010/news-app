import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import { Text, View, StyleSheet, Image } from 'react-native';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const unsplashDefault =
  'https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2508&q=80';
const NewsItem = props => {
  return (
    <View style={styles.newsItem}>
      <Image
        style={styles.image}
        source={{ uri: props.urlToImage || unsplashDefault }}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.info}>
          By {props.source.name} on {moment(props.publishedAt).format('ll')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    borderRadius: 5,
    boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  image: {
    flex: 1,
    height: 120,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  body: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  content: {
    marginTop: 10,
    fontSize: 14,
    opacity: 0.8,
  },
  info: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: '#000',
  },
  footer: {
    padding: 10,
    borderColor: 'rgba(0,0,0,0.09)',
    borderTopWidth: 1,
  },
});

export { NewsItem };
