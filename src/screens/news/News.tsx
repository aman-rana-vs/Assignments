import { View, Text } from 'react-native'
import React from 'react'

import WebView from 'react-native-webview'

import ASHeader from '../../components/header/ASHeader'
import { styles } from './news-styles'
import ASLoader from '../../components/loader/ASLoader'

const News = () => {
  return (
    <View style={styles.container}>
      <ASHeader title="News" />
      <View style={styles.subContainer}>
        <WebView
          startInLoadingState={true}
          source={{
            uri: 'https://www.news-medical.net/condition/Coronavirus-Disease-COVID-19',
          }}
          renderLoading={() => <ASLoader />}
        />
      </View>
    </View>
  )
}

export default News
