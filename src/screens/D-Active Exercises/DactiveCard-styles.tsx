import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/theme';

interface ICardStyles {
  mainContainer: ViewStyle;
  imageBackground: ImageStyle;
  headingContainer: ViewStyle;
  heading: TextStyle;
  buttonsContainer: ViewStyle;
  outerText: TextStyle;
  focusText: TextStyle;
  followText: TextStyle;
  scanText: TextStyle;
  squareText: TextStyle;
}
export const cardStyles: ICardStyles = StyleSheet.create({
  mainContainer: {
    borderRadius: SPACING.space_16,
    elevation: 5,
    height: SPACING.space_148,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  imageBackground: {
    borderRadius: SPACING.space_16,
    flex: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  headingContainer: {
    alignItems: 'center',
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
  },
  heading: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: SPACING.space_18,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    height: 60,
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
