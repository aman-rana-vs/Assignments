import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme/color'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

export const styles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
    borderWidth: Spacing.space_1,
    borderColor: COLORS.neutral[10],
    borderRadius: Spacing.space_10,
    paddingHorizontal: Spacing.space_12,
  },
  title: {
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_22,
    color: COLORS.neutral[400],
    fontFamily: Typography.secondary.semiBold,
    padding: Spacing.space_4,
  },
  listContainer: {
    flex: Spacing.space_1,
    marginVertical: Spacing.space_12,
  },
})
