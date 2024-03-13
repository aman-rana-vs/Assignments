import React from 'react'
import { Image, Text, View } from 'react-native'

import { ASHeaderStyles } from './asHeader-styles'

interface IASHeaderProps {
  emptyView: boolean
  imgSrc?: number | undefined
  title: string
}

const ASHeader = (props: IASHeaderProps) => {
  const { title, imgSrc, emptyView } = props
  return (
    <View style={ASHeaderStyles.container}>
      {emptyView ? <View style={ASHeaderStyles.settingsIcon} /> : null}
      <Text style={ASHeaderStyles.heading}>{title}</Text>
      {imgSrc ? <Image style={ASHeaderStyles.settingsIcon} source={imgSrc} /> : null}
    </View>
  )
}

export default ASHeader
