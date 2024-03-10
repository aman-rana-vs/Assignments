import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme/typography';

export const topnavStyles = StyleSheet.create({
  container: {
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 16,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTS.FRAUNCES_BOLD,
    textAlign: 'center',
    fontSize: 18,
    color: '#292F36',
  },
});
