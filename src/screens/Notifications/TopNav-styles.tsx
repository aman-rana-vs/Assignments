import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme/typography';
import {NOTIFICATION_COLORS} from '../../theme/colors';

export const topNavStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'space-evenly',
    gap: 16,
  },
  heading: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: 18,
    color: NOTIFICATION_COLORS.TOP_NAV.Heading,
    lineHeight: 25.2,
    gap: 16,
    width: 247,
    height: 25,
    textAlign: 'center',
  },
  settingsIcon: {
    height: 24,
    width: 24,
  },
});
