import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme/typography';

export const cardStyles = StyleSheet.create({
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
});
