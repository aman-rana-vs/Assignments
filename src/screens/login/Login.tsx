import { View, Text, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useNavigation } from '@react-navigation/native'

import CovstatsLogo from '../../assets/images/CovstatsLogo.svg'
import { RootNativeStackParamsList } from '../../types/navigation-types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { onGoogleButtonPress } from '../../utils/common-utils'
import { styles } from './login-styles'

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootNativeStackParamsList>>()

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1069770724370-2msi4lhf5gej3loijatakufjb1v9cib5.apps.googleusercontent.com',
    })
  })

  const [number, setNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [numberError, setNumberError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const buttonLabel = number.trim() || password.trim() ? 'Submit' : 'Sign In with Google'

  const handleSubmit = () => {
    const numberRegex = new RegExp(/^(?:\+)?[6-9][0-9]{9}$/)
    if (!numberRegex.test(number)) {
      setNumberError(true)
      return
    }

    if (!password.trim()) {
      setPasswordError(true)
      return
    }

    setPasswordError(false)
    setNumberError(false)
    console.log(number)
    console.log(password)

    setNumber('')
    setPassword('')
    navigation.navigate('TabNavigator')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <CovstatsLogo />
          <Text style={styles.title}>COVSTATS</Text>
        </View>
        <View style={styles.formInput}>
          <Text>Mobile Number*</Text>
          <TextInput
            keyboardType="number-pad"
            style={styles.inputField}
            value={number}
            onChangeText={setNumber}
          />
          {numberError ? <Text style={styles.errorText}>Invalid Number</Text> : null}
        </View>
        <View style={styles.formInput}>
          <Text>Password*</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {passwordError ? <Text style={styles.errorText}>Invalid Password</Text> : null}
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            if (buttonLabel === 'Submit') handleSubmit()
            else onGoogleButtonPress()
          }}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login
