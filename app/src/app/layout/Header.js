import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Header.styles';

export default class App extends Component {
  render() {
    const containerStyle = [ styles.container ];
    if (this.props.leftContainer || this.props.centerContainer || this.props.rightContainer) {
      containerStyle.push(styles.hasContent);
    }
    return (
      <View style={containerStyle}>
        <View>
          {this.props.leftContainer}
        </View>
        <View>
          {this.props.centerContainer}
        </View>
        <View>
          {this.props.rightContainer}
        </View>
      </View>
    );
  }
}

