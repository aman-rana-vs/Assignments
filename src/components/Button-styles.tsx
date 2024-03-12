import {StyleSheet} from 'react-native';
import {FONTS} from '../theme/typography';
import {BUTTON_COLORS, COLORS} from '../theme/colors';

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    borderRadius: 8,
    elevation: 10,
    flex: 1,
    gap: 8,
    height: 36,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: COLORS.neutral700,
    fontFamily: FONTS.QUICKSAND_SEMIBOLD,
    fontSize: 12,
    height: 18,
    width: 30,
  },
});
