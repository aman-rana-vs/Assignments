import { StyleSheet, ViewStyle } from 'react-native'
import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
  subContainer: ViewStyle
}
export const styles: IStyles = StyleSheet.create({
  container: { flex: Spacing.space_1 },
  subContainer: { flex: Spacing.space_1 },
})
