import * as React from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  TextInput,
  ScrollView,
} from 'react-native';
import { NewsItem, ErrorScreen } from '../components';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
      loading: false,
      error: false,
    };
    this.currentPage = 1;
    this.search = '';
    this.reachedEnd = false;
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    if (this.search != this.props.search) {
      this.search = this.props.search;
      this.loadData(true);
    }
  }

  handleRefresh = () => {
    this.setState({ refreshing: true }, () => {
      this.currentPage = 1;
      this.loadData(true);
    });
  };

  loadData = reload => {
    let url;
    if (reload) {
      this.reachedEnd = false;
      this.currentPage = 1;
    }
    if (!this.search) {
      url = `https://newsapi.org/v2/top-headlines?apiKey=cc027eea4a904fbea39174f6b3cedda0&country=AU&pageSize=10&page=${
        this.currentPage
      }`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?apiKey=cc027eea4a904fbea39174f6b3cedda0&country=AU&pageSize=10&page=${
        this.currentPage
      }&q=${this.search}`;
    }
    if (!this.state.loading && !this.reachedEnd) {
      this.setState(
        { loading: true, data: reload ? [] : this.state.data, error: false },
        () =>
          axios
            .get(url)
            .then(res => {
              if (!res.data.articles) {
                this.reachedEnd = true;
              }
              this.setState({
                data: [...this.state.data, ...res.data.articles],
                refreshing: false,
                loading: false,
              });
              this.currentPage += 1;
            })
            .catch(err => this.setState({ error: true, loading: false }))
      );
    }
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 200
    );
  };

  render() {
    const { data, refreshing, error, loading } = this.state;
    const text = error
      ? 'Sorry... something went wrong'
      : 'Search returned no results';
    if (!loading && (error || (data.length == 0 && !refreshing))) {
      return (
        <ErrorScreen
          buttonText={error ? 'Try again' : 'Clear Text'}
          text={text}
          onClick={() => {
            error ? this.loadData(true) : this.props.clearSearch();
          }}
        />
      );
    }
    return (
      <View style={styles.news}>
        <FlatList
          // bounces={true}
          refreshControl={
            <RefreshControl
              colors={['#9Bd35A', '#689F38']}
              refreshing={refreshing}
              onRefresh={() => {
                this.handleRefresh();
              }}
            />
          }
          onScroll={({ nativeEvent }) => {
            if (this.isCloseToBottom(nativeEvent)) {
              this.loadData();
            }
          }}
          scrollEventThrottle={400}
          data={data}
          renderItem={x => {
            return <NewsItem {...x.item} />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news: {
    padding: 10,
    paddingTop: 50,
  },
});

export { News };
