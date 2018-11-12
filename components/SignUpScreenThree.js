import React from "react"
import { View, Text, KeyboardAvoidingView } from "react-native"

import InputField from "./InputField.js"
import FormButton from "./FormButton.js"

const SignUpScreenThree = props => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }} behavior="padding">
      <Text style={{ marginBottom: 20, fontSize: 40, fontWeight: "600" }}>Create a password</Text>
      <InputField
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <InputField
        placeholder="Confirm password"
        textContentType="password"
        secureTextEntry={true}
      />
      <View style={{ marginTop: 20 }}>
        <FormButton text="Get Started!" screen={props.screenProps.logIn}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUpScreenThree