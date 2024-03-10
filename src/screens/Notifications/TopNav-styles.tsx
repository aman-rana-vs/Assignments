import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {NOTIFICATION_COLORS, TOP_NAV} from '../../theme/colors';

interface ITopNavStyles {
  container: ViewStyle;
  heading: TextStyle;
  settingsIcon: ImageStyle;
}
export const topNavStyles: ITopNavStyles = StyleSheet.create({
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
    color: TOP_NAV.Heading,
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
