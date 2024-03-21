import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  imageContainer: ViewStyle
  title: TextStyle
  description: TextStyle
  dots: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: { flex: Spacing.space_1 },
  subContainer: { marginVertical: '40%' },
  imageContainer: { alignItems: 'center' },
  title: {
    fontFamily: Typography.primary.semiBold,
    fontSize: Spacing.space_28,
    textAlign: 'center',
  },
  dots: { backgroundColor: COLORS.primary[50] },
  description: {
    fontFamily: Typography.primary.light,
    lineHeight: Spacing.space_22,
    fontSize: Spacing.space_16,
    padding: Spacing.space_20,
    textAlign: 'center',
  },
})
