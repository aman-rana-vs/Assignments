import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Circle } from 'react-native-progress'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'
import { styles } from './asTopCountryCard-styles'
import { getProgressColor } from '../../constants/common-constants'

const ASTopCountryCard = (props: any) => {
  const { country, cases, recovered, population } = props
  const percent = Math.floor((cases / population) * 100)
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Circle
          size={Spacing.space_60}
          progress={percent / 100}
          unfilledColor={COLORS.neutral['10']}
          thickness={Spacing.space_4}
          strokeCap="round"
          borderColor="white"
          color={getProgressColor(percent)}
          showsText={true}
          textStyle={styles.percentageText}
          formatText={() => `${percent}%`}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailContainerTitle}>{country}</Text>
        <View style={styles.detailSubContainer}>
          <Text style={styles.detailSubContainerTitle}>Affected - {cases / 1000}k</Text>
          <Text style={styles.detailSubContainerTitle}>
            Recovered - {recovered > 1000 ? recovered / 1000 + 'k' : recovered}
          </Text>
        </View>
      </View>
      <Icon name="bell" size={Spacing.space_16} color="red" style={styles.containerImage} />
    </View>
  )
}

export default ASTopCountryCard
