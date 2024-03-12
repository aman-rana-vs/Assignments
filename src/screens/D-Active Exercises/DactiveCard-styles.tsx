import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {D_ACTIVE_COLORS} from '../../theme/colors';
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
    height: SPACING.space_148,
    justifyContent: 'space-between',
    borderRadius: SPACING.space_16,
    elevation: 5,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: SPACING.space_16,
    overflow: 'hidden',
  },
  headingContainer: {
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: SPACING.space_18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    height: 60,
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_16,
    gap: SPACING.space_12,
  },

  outerText: {
    color: D_ACTIVE_COLORS.Outer,
  },

  focusText: {
    color: D_ACTIVE_COLORS.Focus,
  },
  followText: {
    color: D_ACTIVE_COLORS.Follow,
  },
  scanText: {
    color: D_ACTIVE_COLORS.Scan,
  },
  squareText: {
    color: D_ACTIVE_COLORS.Square,
  },
});
