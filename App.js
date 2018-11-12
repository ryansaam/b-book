import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import { createStackNavigator } from 'react-navigation'
import DefaultScreen from './components/DefaultScreen.js'
import HomeScreen from './components/HomeScreen.js'
import SignUpScreenOne from './components/SignUpScreenOne.js'
import SignUpScreenTwo from './components/SignUpScreenTwo.js'
import SignUpScreenThree from './components/SignUpScreenThree.js'

const RootStack = createStackNavigator({
  Default: {
    screen: DefaultScreen,
    navigationOptions: () => ({
      title: "BBook"
    })
  },
  SignUpOne: {
    screen: SignUpScreenOne,
    navigationOptions: () => ({
      title: "Sign Up"
    })
  },
  SignUpTwo: {
    screen: SignUpScreenTwo,
    navigationOptions: () => ({
      title: "Sign Up"
    })
  },
  SignUpThree: {
    screen: SignUpScreenThree,
    navigationOptions: () => ({
      title: "Sign Up"
    })
  }
}, {
  initialRouteName: 'Default',
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#a9c2f1",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      username: ''
    }
    this.logIn = this.logIn.bind(this)
    this.setUsername = this.setUsername.bind(this)
  }
  logIn() {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }))
  }
  setUsername(username) {
    this.setState({ username })
    console.log(username)
  }
  render() {
    return (
      this.state.isLoggedIn ? 
      <Provider store={store} >
        <RootStack screenProps={{ logIn: this.logIn, username: this.setUsername }} />
      </Provider> : <HomeScreen />
    )
  }
}

export default App
