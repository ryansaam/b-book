import React, { Component } from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

class SignUpScreenTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false,
      valueOne: ""
    }
    this.updateValueOne = this.updateValueOne.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { valueOne } = this.state
    if (valueOne.length !== prevState.valueOne.length) {
      if (valueOne.length === 0) {
        this.setState({ bool: false })
      } else if (valueOne.length > 0) {
        this.setState({ bool: true })
      }
    }
  }

  updateValueOne(text) {
    console.log(text)
    this.setState({valueOne: text})
  }

  onSubmit() {
    const { valueOne } = this.state
    if (valueOne.length > 0) {
      this.props.navigation.navigate('SignUpThree')
    }
  }

  render() {
    const { bool } = this.state
    return (
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{position: "absolute", width: "100%", height: "100%"}} />
        </TouchableWithoutFeedback>
        <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600", textAlign: "center" }}>Provide an email address</Text>
        <InputField
          placeholder="email"
          textContentType="emailAddress"
          returnKeyType={bool ? "done" : "next"}
          handleChange={this.updateValueOne}
          handleSubmit={this.onSubmit}
        />
        <View style={{ marginTop: 20 }}>
          {bool ? <FormButton text="Next" screen={() => this.props.navigation.navigate('SignUpThree')}/> :
          <View style={{height: 60}} />}
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default SignUpScreenTwo