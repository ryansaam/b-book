import React, { Component } from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"
import ErrorMessage from "./ErrorMessage.js"

class SignUpScreenThree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      displayError: false,
      valueOne: "",
      valueTwo: ""
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.updateValueTwo = this.updateValueTwo.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { valueOne, valueTwo } = this.state
    if (valueOne.length !== prevState.valueOne.length || valueTwo.length !== prevState.valueTwo.length) {
      if (valueOne.length === 0 || valueTwo.length === 0) {
        this.setState({ bool: false, displayError: false })
      } else if (valueOne.length > 0 & valueTwo.length > 0) {
        this.setState({ bool: true })
      }
    }
  }

  updateValueOne(text) {
    console.log(text)
    this.setState({valueOne: text})
  }
  updateValueTwo(text) {
    console.log(text)
    this.setState({valueTwo: text})
  }

  onSubmit() {
    const { valueOne, valueTwo } = this.state
    if (this.state.valueOne !== this.state.valueTwo) {
      this.setState({ displayError: true })
    } else if (valueOne.length > 0 & valueTwo.length > 0 && valueOne === valueTwo) {
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

export default SignUpScreenThree