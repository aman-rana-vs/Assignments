import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  title: TextStyle
  subContainer: ViewStyle
  legendDark: ViewStyle
  legendLight: ViewStyle
  legendText: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    borderRadius: Spacing.space_10,
    borderColor: COLORS.neutral['10'],
    marginBottom: Spacing.space_24,
    padding: Spacing.space_16,
    gap: Spacing.space_8,
    borderWidth: Spacing.space_1,
  },
  title: {
    lineHeight: Spacing.space_22,
    fontSize: Spacing.space_16,
    fontFamily: Typography.secondary.bold,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: Spacing.space_16,
  },
  legendDark: {
    backgroundColor: COLORS.primary[100],
    height: Spacing.space_10,
    width: Spacing.space_10,
    marginRight: Spacing.space_12,
  },
  legendLight: {
    height: Spacing.space_10,
    width: Spacing.space_10,
    backgroundColor: COLORS.primary['50'],
    marginRight: Spacing.space_12,
  },
  legendText: {
    fontSize: Spacing.space_12,
    lineHeight: Spacing.space_18,
    color: COLORS.neutral[100],
    fontFamily: Typography.secondary.regular,
    marginRight: Spacing.space_20,
  },
})
