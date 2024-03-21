import { StyleSheet, ViewStyle } from 'react-native'
import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    flex: Spacing.space_1,
    backgroundColor: COLORS.white,
    paddingHorizontal: Spacing.space_14,
  },
})
