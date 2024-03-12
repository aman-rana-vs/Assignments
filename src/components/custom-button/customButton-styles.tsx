import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

import {FONTS} from '../../theme/typography';
import {COLORS} from '../../theme/colors';
import {SPACING} from '../../theme/theme';

interface IButtonStyles {
  container: ViewStyle;
  buttonText: TextStyle;
}
export const buttonStyles: IButtonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    borderRadius: SPACING.space_8,
    elevation: SPACING.space_10,
    flex: SPACING.space_1,
    gap: SPACING.space_8,
    height: SPACING.space_36,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_12,
  },
  buttonText: {
    color: COLORS.neutral700,
    fontFamily: FONTS.QUICKSAND_SEMIBOLD,
    fontSize: SPACING.space_12,
    height: SPACING.space_18,
    width: SPACING.space_30,
  },
});
