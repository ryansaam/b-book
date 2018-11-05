import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import DefaultScreen from './components/DefaultScreen.js'
import HomeScreen from './components/HomeScreen.js'
import SignUpScreen from './components/SignUpScreen.js'

const RootStack = createStackNavigator({
  Default: DefaultScreen,
  SignUp: SignUpScreen,
  Home: HomeScreen
}, {
  initialRouteName: 'Default',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
    this.logIn = this.logIn.bind(this)
  }
  logIn() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }))
  }
  render() {
    return this.state.isLoggedIn ? <RootStack screenProps={this.logIn} /> : <HomeScreen />
  }
}

export default App
