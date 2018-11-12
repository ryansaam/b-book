import React from "react"
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

const SignUpScreenOne = props => {
  let bool = true
  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
      <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600" }}>Tell us your name</Text>
      <InputField
        placeholder="First Name"
        textContentType="name"
        returnKeyType={bool ? "done" : "next"}
      />
      <InputField
        placeholder="Last Name"
        textContentType="name"
        returnKeyType={bool ? "done" : "next"}
      />
      <View style={{ marginTop: 20 }}>
        <FormButton text="Next" screen={() => props.navigation.navigate('SignUpTwo')}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreenOne