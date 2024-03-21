import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'

import { styles } from './asLoader-styles'

const ASLoader = () => {
  return (
    <Modal animationType="fade" transparent={true} visible={true}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </Modal>
  )
}

export default ASLoader
