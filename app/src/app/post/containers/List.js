import styles from './List.styles';
import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import * as actions from '../redux/posts';
import Header from '../../layout/Header';
import ListItem from '../components/ListItem';

@connect((state) => ({
  posts: state.posts.posts,
  post: state.post.post,
}), actions)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  toHome() {
    this.props.router.pop();
  }

  toDetail(post) {
    this.props.router.push('post/detail', { post });
  }

  render() {
    const { posts, params } = this.props;
    const { width, height } = Dimensions.get('window');
    return (
      <View style={{width, height}}>
        <Header
          leftContainer={
            <TouchableOpacity onPress={this.toHome.bind(this)}>
              <Text>返回</Text>
            </TouchableOpacity>
          }
          centerContainer={
            <Text>文章列表</Text>
          }
        />
        <ListView
          dataSource={this.dataSource.cloneWithRows(posts)}
          renderRow={(post) => <ListItem post={post} toDetail={this.toDetail.bind(this)} />}
          style={styles.listView}
        />
      </View>
    );
  }
}
