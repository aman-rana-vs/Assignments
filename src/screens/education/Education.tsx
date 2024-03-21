import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import ASHeader from '../../components/header/ASHeader'
import { styles } from './education-styles'
import ASLoader from '../../components/loader/ASLoader'

const Education = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="Education" />
      <View style={styles.subContainer}>
        <WebView
          startInLoadingState={true}
          source={{
            uri: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/covid-19-vaccine-what-you-need-to-know',
          }}
          renderLoading={() => <ASLoader />}
        />
      </View>
    </View>
  )
}

export default Education
