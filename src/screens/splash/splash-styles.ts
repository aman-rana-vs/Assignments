import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  copyrightText: TextStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: '40%',
    gap: 30,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_28,
    textAlign: 'center',
    color: COLORS.primary[50],
  },
  copyrightText: {
    marginBottom: '10%',
    fontFamily: Typography.primary.semiBold,
  },
})
