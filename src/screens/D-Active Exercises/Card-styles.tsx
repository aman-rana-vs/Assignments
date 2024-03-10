import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {FONTS} from '../../theme/typography';
import {D_ACTIVE_COLORS} from '../../theme/colors';

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
    height: 148,
    justifyContent: 'space-between',
    borderRadius: 16,
    elevation: 5,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 16,
    overflow: 'hidden',
  },
  headingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  heading: {
    width: 99,
    height: 25,
    textAlign: 'center',
    fontFamily: FONTS.FRAUNCES_BOLD,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 12,
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
