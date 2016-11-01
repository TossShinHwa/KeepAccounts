import styles from './ListItem.styles';
import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, StyleSheet } from 'react-native';
import Title from './Title';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    return (
      <View>
        <TouchableOpacity activeOpacity={1} onPress={this.props.toDetail.bind(this, post)}>
          <Title post={post} />
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  }
}

