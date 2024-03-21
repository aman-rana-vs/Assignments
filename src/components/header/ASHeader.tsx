import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { styles } from './asHeader-styles'

interface IHeaderProps {
  title: string
}

const ASHeader = ({ title }: IHeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable>
        <Icon name="menu" size={20} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => Alert.alert('Coming Soon')}>
        <Icon name="user-check" size={20} />
      </Pressable>
    </View>
  )
}

export default ASHeader
