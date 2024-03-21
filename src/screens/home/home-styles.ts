import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  headerContainer: ViewStyle
  title: TextStyle
  subTitle: TextStyle
  buttonContainer: ViewStyle
  button: ViewStyle
  listContainer: ViewStyle
}

export const styles: IStyles = StyleSheet.create({
  container: { flex: Spacing.space_1, backgroundColor: COLORS.white },
  subContainer: {
    flex: Spacing.space_1,
    margin: Spacing.space_10,
    padding: Spacing.space_20,
    gap: Spacing.space_16,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Typography.secondary.semiBold,
    fontSize: Spacing.space_18,
    color: COLORS.neutral[400],
  },
  subTitle: {
    fontFamily: Typography.secondary.regular,
    fontSize: Spacing.space_12,
    color: COLORS.neutral[100],
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: Spacing.space_1,
    borderColor: COLORS.neutral[10],
    alignItems: 'center',
  },
  button: {
    padding: Spacing.space_10,
  },
  listContainer: {
    flex: Spacing.space_1,
  },
})
