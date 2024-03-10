import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme/typography';
import {NOTIFICATION_COLORS} from '../../theme/colors';

export const EmptyNotStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subContainer: {
    alignItems: 'center',
    width: 335,
  },
  icon: {
    height: 154,
    width: 154,
  },
  heading: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: 24,
    width: 327,
    textAlign: 'center',
    color: NOTIFICATION_COLORS.EMPTY_NOTIFICATIONS.Heading,
  },
  message: {
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    textAlign: 'center',
    fontSize: 16,
    color: NOTIFICATION_COLORS.EMPTY_NOTIFICATIONS.Message,
  },
  textContainer: {
    gap: 8,
  },
});