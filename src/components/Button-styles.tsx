import {StyleSheet} from 'react-native';
import {FONTS} from '../theme/typography';

export const buttonStyles = StyleSheet.create({
  buttonContainer: {
    height: 36,
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 10,
  },
  buttonText: {
    height: 18,
    width: 30,
    fontSize: 12,
    fontFamily: FONTS.QUICKSAND_SEMIBOLD,
    color: '#292F36',
  },
});
