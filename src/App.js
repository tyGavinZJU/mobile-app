import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { ListItem, Header,Card,Button,Text,Icon,Input} from 'react-native-elements'

import TaskBoard from './views/TaskBoard'

export default class App  extends Component {
  render() {
    return (
      <View>
        <TaskBoard/>
      </View>
    );
  }
}


