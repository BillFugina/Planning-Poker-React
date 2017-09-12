import { Compare } from '.'
export class Replace {
  static IfNullOrEmpty<T>(compareValue: T, replacementValue: T): T {
    return Compare.IsNullOrEmpty(compareValue) ? replacementValue : compareValue
  }
}
