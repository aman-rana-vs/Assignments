import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {NOTIFICATION_COLORS} from '../../theme/colors';

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
    paddingVertical: 17,
    paddingHorizontal: 20,
    width: 390,
    gap: 4,
    borderWidth: 0.7,
    borderColor: NOTIFICATION_COLORS.CARD.BorderColor,
  },
  completedCard: {
    backgroundColor: NOTIFICATION_COLORS.NOTIFICATION_COMPLETED,
  },
  card: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  image: {
    height: 48,
    width: 48,
  },
  messageContainer: {
    height: 48,
    width: 259,
    justifyContent: 'center',
  },
  message: {
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    fontSize: 14,
    lineHeight: 16.8,
    color: NOTIFICATION_COLORS.CARD.Message,
  },
  timeAgoContainer: {
    paddingHorizontal: 76,
  },
  timeAgoText: {
    width: 183,
    height: 18,
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    lineHeight: 18,
    fontSize: 12,
    color: NOTIFICATION_COLORS.CARD.TimeAgo,
  },
});