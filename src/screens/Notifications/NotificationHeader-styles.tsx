import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/theme';

interface ITopNavStyles {
  container: ViewStyle;
  heading: TextStyle;
  settingsIcon: ImageStyle;
}
export const topNavStyles: ITopNavStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACING.space_16,
    height: 56,
    justifyContent: 'space-evenly',
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_16,
  },
  heading: {
    color: COLORS.neutral700,
    flex: 1,
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: 18,
    gap: SPACING.space_16,
    lineHeight: 25.2,
    textAlign: 'center',
  },
  settingsIcon: {
    height: SPACING.space_24,
    width: SPACING.space_24,
  },
});
