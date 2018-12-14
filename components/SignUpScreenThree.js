import React, { Component } from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
import { connect } from 'react-redux'

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"
import ErrorMessage from "./ErrorMessage.js"

import { SET_PASSWORD, setName } from "../redux/actions.js"

const mapStateToProps = state => {
  return {
    password: state.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: (type, text) => {
      dispatch(setName(type, text))
    }
  }
}

class ConnectSignUpScreenThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      displayError: false,
      valueTwo: ""
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.updateValueTwo = this.updateValueTwo.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { valueTwo } = this.state
    const { password } = this.props
    if (password.length !== prevProps.password.length || valueTwo.length !== prevState.valueTwo.length) {
      if (password.length === 0 || valueTwo.length === 0) {
        this.setState({ bool: false, displayError: false })
      } else if (password.length > 0 & valueTwo.length > 0) {
        this.setState({ bool: true })
      }
    }
  }

  updateValueOne(text) {
    this.props.setName(SET_PASSWORD, text)
  }
  updateValueTwo(text) {
    console.log(text)
    this.setState({valueTwo: text})
  }

  onSubmit() {
    const { valueTwo } = this.state
    const { password } = this.props
    if (password !== valueTwo) {
      this.setState({ displayError: true })
    } else if (password.length > 0 & valueTwo.length > 0 && password === valueTwo) {
      this.props.screenProps.logIn()
    }
  }

  render() {
    const { bool, displayError } = this.state
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{position: "absolute", width: "100%", height: "100%"}} />
        </TouchableWithoutFeedback>
        <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600" }}>Create a password</Text>
        <InputField
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          returnKeyType={bool ? "done" : "next"}
          handleChange={this.updateValueOne}
          handleSubmit={this.onSubmit}
        />
        <InputField
          placeholder="Confirm password"
          textContentType="password"
          secureTextEntry={true}
          returnKeyType={bool ? "done" : "next" }
          handleChange={this.updateValueTwo}
          handleSubmit={this.onSubmit}
        />
        {displayError ? 
          <View style={{marginTop: 5}}>
            <ErrorMessage message="Make sure your passwords match"/>
          </View> : null
        }
        <View style={{ marginTop: 20 }}>
          {bool ? <FormButton text="Get Started!" onPress={this.onSubmit} /> :
          <View style={{height: 60}} />}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const SignUpScreenThree = connect(mapStateToProps, mapDispatchToProps)(ConnectSignUpScreenThree)

export default SignUpScreenThree