import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import ASHeader from '../../components/header/ASHeader'
import { styles } from './discovery-styles'
import ASLoader from '../../components/loader/ASLoader'

const Discovery = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="Discovery" />
      <View style={styles.subContainer}>
        <WebView
          startInLoadingState={true}
          source={{
            uri: 'https://www.google.com/maps/place/91springboard/@28.5836595,77.3166096,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce58e07e58aa1:0x32d5740a24aaf4b1!8m2!3d28.5836595!4d77.3166096!16s%2Fg%2F11gxtjf8qz?entry=ttu',
          }}
          renderLoading={() => <ASLoader />}
        />
      </View>
    </View>
  )
}

export default Discovery
