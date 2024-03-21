import { StyleSheet, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'

interface IStyles {
  container: ViewStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    height: '60%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
})
