import { COLORS } from '../theme/color'

export const THRESHOLD = 50000

export function getProgressColor(val: number) {
  switch (true) {
    case val < 20:
      return COLORS.success[50]
    case val < 40:
      return COLORS.success[100]
    case val < 60:
      return COLORS.primary[50]
    case val < 80:
      return COLORS.primary[100]
    default:
      return COLORS.failure
  }
}
