import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/theme';

interface ICardStyles {
  container: ViewStyle;
  completedCard: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  messageContainer: ViewStyle;
  message: TextStyle;
  timeAgoContainer: ViewStyle;
  timeAgoText: TextStyle;
}
export const cardStyles: ICardStyles = StyleSheet.create({
  container: {
    borderColor: COLORS.neutral100,
    borderWidth: 0.7,
    flex: 1,
    gap: SPACING.space_4,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_16,
  },
  completedCard: {
    backgroundColor: COLORS.primary50,
  },
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: SPACING.space_20,
  },
  image: {
    height: SPACING.space_48,
    width: SPACING.space_48,
  },
  messageContainer: {
    flex: 1,
    height: SPACING.space_48,
    justifyContent: 'center',
  },
  message: {
    color: COLORS.black,
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    fontSize: SPACING.space_14,
    lineHeight: 16.8,
  },
  timeAgoContainer: {
    paddingHorizontal: SPACING.space_76,
  },
  timeAgoText: {
    color: COLORS.neutral600,
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    fontSize: SPACING.space_12,
    height: SPACING.space_18,
    lineHeight: SPACING.space_18,
    width: 183,
  },
});
