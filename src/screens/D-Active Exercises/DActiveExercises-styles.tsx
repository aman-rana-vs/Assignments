import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/theme';

export const DActiveStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_10,
  },
  listContainer: {
    width: 335,
    gap: SPACING.space_20,
    paddingBottom: SPACING.space_20,
  },
});
