import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class SignUpScreen extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Sign Up',
    headerLeft: null
  }
  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text>This is the SignUpScreen</Text>
        <Button title="go to default" onPress={() => this.props.navigation.navigate('Default')} />
        <Button 
          title="Get Started!" 
          onPress={this.props.screenProps}
        />
      </View>
    )
  }
}

export default SignUpScreen