import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface IStyles {
  header: ViewStyle
  title: TextStyle
}
export const styles: IStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.space_20,
    elevation: Spacing.space_8,
  },
  title: {
    textAlign: 'center',
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_16,
    color: COLORS.neutral[600],
  },
})
