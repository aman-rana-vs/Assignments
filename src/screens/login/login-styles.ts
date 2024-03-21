import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Typography } from '../../theme/typography'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/color'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
  title: TextStyle
  formInput: TextStyle
  button: ViewStyle
  inputField: TextStyle
  buttonText: TextStyle
  errorText: TextStyle
}

export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    padding: Spacing.space_22,
  },
  subContainer: {
    alignItems: 'center',
    marginTop: '30%',
    marginBottom: Spacing.space_10,
    gap: Spacing.space_30,
    flex: Spacing.space_1,
  },
  title: {
    fontFamily: Typography.primary.bold,
    fontSize: Spacing.space_28,
    textAlign: 'center',
    color: COLORS.primary[50],
  },
  formInput: {
    marginVertical: Spacing.space_10,
    gap: Spacing.space_4,
  },
  inputField: {
    borderWidth: Spacing.space_1,
    borderColor: COLORS.neutral[50],
    borderRadius: Spacing.space_16,
  },
  button: {
    backgroundColor: COLORS.primary[50],
    borderRadius: Spacing.space_4,
    marginTop: Spacing.space_20,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: Spacing.space_14,
    color: COLORS.white,
  },
  errorText: {
    fontFamily: Typography.primary.regular,
    color: COLORS.failure,
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
})
