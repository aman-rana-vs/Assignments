import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {TOP_NAV} from '../../theme/colors';

type TTopNavStyles = {
  container: ViewStyle;
  text: TextStyle;
};
export const topnavStyles: TTopNavStyles = StyleSheet.create({
  container: {
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 16,
    alignItems: 'center',
    width: 375,
  },
  text: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    textAlign: 'center',
    fontSize: 18,
    color: TOP_NAV.Heading,
  },
});
