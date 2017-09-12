// Do not put any application specific components in this module/folder
// Eventually, these Momentum components may be moved to a separate
// module/repo/package so they can be shared across multiple projects.
export * from './particles'

export * from './calendar'
export * from './comment'
export * from './control-group'
export * from './feed-item'
export * from './feed'
export * from './file-icon'
export * from './file-input'
export * from './file-upload'
export * from './greenfield'
export * from './info-card'
export * from './lightbox'
export * from './loading-view'
export * from './main'
export * from './media-card-uploading'
export * from './media-card'
export * from './menu'
export * from './modal'
export * from './navigation-menu'
export * from './navigation'
export * from './popout-date-picker'
export * from './popout-select'
export * from './popout'
export * from './portal'
export * from './search'
export * from './select-menu'
export * from './slat'
export * from './slideout'
export * from './tabs'
export * from './tag-group'
export * from './tag-list-editor'
export * from './user-avatar-group'
export * from './user-avatar'
export * from './user-info-card'
export * from './user-picker'
export * from './user-popout-menu'
export * from './view'

export type IMdsComponentTag<TElementTag extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements> = TElementTag

export function ClassNameBuilder(primaryClass: string, ...modifierClasses: string[]): { className: string } {
  return { className: [primaryClass].concat(modifierClasses.filter(c => c)).join(' ') }
}
