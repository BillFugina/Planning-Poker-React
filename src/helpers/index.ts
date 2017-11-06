export function ClassNameBuilder(primaryClass: string, ...modifierClasses: string[]): { className: string } {
    return { className: [primaryClass].concat(modifierClasses.filter(c => c)).join(' ') }
  }
  