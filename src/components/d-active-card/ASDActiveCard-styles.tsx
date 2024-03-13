import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/spacing';

interface IASDActiveCardStyles {
  container: ViewStyle;
  backgroundImage: ImageStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  outerText: TextStyle;
  focusText: TextStyle;
  followText: TextStyle;
  scanText: TextStyle;
  squareText: TextStyle;
}
export const ASDActiveCardStyles: IASDActiveCardStyles = StyleSheet.create({
  container: {
    borderRadius: SPACING.space_16,
    elevation: SPACING.space_5,
    height: SPACING.space_148,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: SPACING.space_16,
    flex: SPACING.space_1,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
  },
  title: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    height: SPACING.space_60,
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
  },

  outerText: {
    color: COLORS.secondary600,
  },

  focusText: {
    color: COLORS.primary700,
  },
  followText: {
    color: COLORS.neutral700,
  },
  scanText: {
    color: COLORS.accent700,
  },
  squareText: {
    color: COLORS.primary700,
  },
});
