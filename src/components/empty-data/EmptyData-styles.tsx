import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONTS} from '../../theme/typography';
import {SPACING} from '../../theme/spacing';
import {COLORS} from '../../theme/colors';

interface IEmptyDataStyles {
  container: ViewStyle;
  subContainer: ViewStyle;
  icon: ImageStyle;
  textContainer: ViewStyle;
  heading: TextStyle;
  message: TextStyle;
}
export const emptyDataStyles: IEmptyDataStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  subContainer: {
    alignItems: 'center',
    width: 335,
  },
  icon: {
    height: SPACING.space_154,
    width: SPACING.space_154,
  },
  heading: {
    color: COLORS.tundora,
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: 24,
    textAlign: 'center',
    width: 327,
  },
  message: {
    color: COLORS.neutral700,
    fontFamily: FONTS.QUICKSAND_MEDIUM,
    fontSize: 16,
    textAlign: 'center',
  },
  textContainer: {
    gap: SPACING.space_8,
  },
});
