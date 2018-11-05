import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DefaultScreen extends Component {
  static navigationOptions = {
    title: 'Default',
  };
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text>This is the DefaultScreen</Text>
        <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
      </View>
    )
  }
}

export default DefaultScreen