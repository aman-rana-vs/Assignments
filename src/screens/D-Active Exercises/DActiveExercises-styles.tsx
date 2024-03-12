import {StyleSheet} from 'react-native';
import {SPACING} from '../../theme/theme';

export const DActiveStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    gap: SPACING.space_10,
  },
  listContainer: {
    gap: SPACING.space_20,
    paddingBottom: SPACING.space_20,
    width: 335,
  },
});
