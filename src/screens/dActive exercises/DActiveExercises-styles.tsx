import { StyleSheet, ViewStyle } from 'react-native'
import { SPACING } from '../../theme/spacing'

interface IASDActiveStyles {
  container: ViewStyle
  listContainer: ViewStyle
}
export const ASDActiveStyles: IASDActiveStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    gap: SPACING.space_10,
  },
  listContainer: {
    gap: SPACING.space_20,
    paddingBottom: SPACING.space_20,
    width: SPACING.space_335,
  },
})
