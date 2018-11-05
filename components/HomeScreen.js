import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.props.triggerLogin
  }
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text>This is the Home screen</Text>
      </View>
    )
  }
}

export default HomeScreen