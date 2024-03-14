import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { ASButtonStyles } from './asButton-styles'

interface IASButtonProps {
  time: string
}
const ASButton = (props: IASButtonProps) => {
  const { time } = props
  return (
    <TouchableOpacity style={ASButtonStyles.container}>
      <Text style={ASButtonStyles.buttonText}>{time}</Text>
    </TouchableOpacity>
  )
}

export default ASButton
