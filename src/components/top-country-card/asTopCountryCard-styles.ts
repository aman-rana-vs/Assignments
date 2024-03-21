import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  progressContainer: ViewStyle
  detailContainer: ViewStyle
  detailContainerTitle: TextStyle
  detailSubContainer: ViewStyle
  detailSubContainerTitle: TextStyle
  containerImage: ImageStyle
  percentageText: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    flexDirection: 'row',
    borderWidth: Spacing.space_1,
    borderColor: COLORS.neutral[10],
    borderRadius: Spacing.space_10,
    margin: Spacing.space_8,
    justifyContent: 'space-between',
    padding: Spacing.space_8,
  },
  progressContainer: {
    marginHorizontal: Spacing.space_10,
  },
  detailContainer: {
    justifyContent: 'center',
    flex: Spacing.space_1,
  },
  detailContainerTitle: {
    fontFamily: Typography.secondary.regular,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_20,
    color: COLORS.neutral[500],
    marginRight: Spacing.space_128,
  },
  detailSubContainer: {
    marginTop: Spacing.space_2,
    gap: Spacing.space_1,
  },
  detailSubContainerTitle: {
    fontFamily: Typography.secondary.regular,
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
    color: COLORS.neutral[100],
  },
  containerImage: {
    marginRight: Spacing.space_4,
    marginTop: Spacing.space_4,
  },
  percentageText: {
    fontFamily: Typography.secondary.semiBold,
    fontSize: Spacing.space_14,
    color: COLORS.neutral[500],
  },
})
