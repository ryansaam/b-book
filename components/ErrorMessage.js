import React from "react"
import { View, Text } from "react-native"

const ErrorMessage = props => {
  return (
    <View style={{backgroundColor: "rgba(255, 25, 25, 0.7)", height: 40, borderRadius: "10px 10px", padding: 5}}>
      <Text style={{fontSize: 22}}>{props.message}</Text>
    </View>
  )
}

export default ErrorMessage