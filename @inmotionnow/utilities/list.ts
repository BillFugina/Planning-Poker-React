type IList<TElement> = TElement[]

export class List {

  static Distinct<TElement>(
    list: IList<TElement>,
    equals: (a: TElement, b: TElement) => boolean | number = (a, b) => a === b
  ): IList<TElement> {
    return (list || []).filter(
      (a, index) => index === list.findIndex(
        b => {
          const equal = equals(a, b)
          return equal === true || equal === 0
        }
      )
    )
  }

}
