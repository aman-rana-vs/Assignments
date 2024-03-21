import { COLORS } from '../../theme/color'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  image: ImageStyle
  countryDataContainer: ViewStyle
  covidDataContainer: ViewStyle
  countryName: TextStyle
  covidData: TextStyle
  icon: ImageStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    borderRadius: Spacing.space_10,
    borderWidth: Spacing.space_1,
    borderColor: COLORS.neutral[10],
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.space_20,
    marginVertical: Spacing.space_4,
  },
  image: { height: Spacing.space_48, width: Spacing.space_48 },
  countryDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: Spacing.space_8,
    flex: Spacing.space_1,
  },
  covidDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: Spacing.space_4,
    flex: Spacing.space_1,
  },
  countryName: {
    fontFamily: Typography.primary.light,
    color: COLORS.neutral[500],
    fontSize: Spacing.space_22,
    lineHeight: Spacing.space_28,
  },

  countryNameContainer: {
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  covidData: {
    fontFamily: Typography.secondary.semiBold,
    color: COLORS.neutral[500],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_22,
  },
  icon: {
    padding: Spacing.space_14,
  },
})
