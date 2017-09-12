export class Compare {

  static Objects<T>(compare: (a: T, b: T) => number): (a: T, B: T) => number {
    return (a, b) =>
      Compare.IsNullOrEmpty(a) && Compare.IsNullOrEmpty(b)
        ? 0 // Both are Null/Empty therefore they are considered equal
        : Compare.IsNullOrEmpty(a)
          ? 1 // Only A is Null/Empty (drop A to bottom)
          : Compare.IsNullOrEmpty(b)
            ? -1 // Only B is Null/Empty (drop B to the bottom)
            : compare(a, b) // Both have values, invoke the supplied compare function
  }

  static Insensitive(a: string, b: string): number {
    return Compare.Objects<string>((a, b) => a.trim().toLocaleLowerCase().localeCompare(b.trim().toLocaleLowerCase()))(a, b)
  }

  static Ordinal(a: number, b: number): number {
    return Compare.Objects<number>((a, b) => a - b)(a, b)
  }

  static IsNullOrEmpty<T>(value: T): boolean {
    return (value === undefined) || (value === null) || (typeof value === 'string' && value === '')
  }

  static SequenceEquals(left: any[], right: any[]): boolean {
    return left
      && right
      && left.length === right.length
      && left.every((element, index) => element === right[index])
  }

}
