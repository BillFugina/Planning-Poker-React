// tslint:disable:type-i-prefix
// tslint:disable:interface-name
interface Window {
  mds: {
    editable: {
      add(element: HTMLTextAreaElement | HTMLInputElement | HTMLDivElement): void
      remove(element: HTMLTextAreaElement | HTMLInputElement | HTMLDivElement): void
      all(): void
    }
    datepicker: {
      add: (element: HTMLInputElement, options?: {}) => any
      remove: (element: any) => void
    }
    tabs: {
      add(ICallback): void
    }
    textarea: {
      add(): void
      refresh(): void
      destroy(): void
    }
    popout: Ipopout
    typeahead(id: string | IMdsTagListConfig): IMdsTagListEditor
    overlay(id: string | {id: string, type: TMdsOverlayTypes, focus?: TMdsOverlayFocus, onClose?(): void, onOpen?(): void}): IMdsOverlay
    refresh(): void
  }
  Mds: any

}

interface IMdsTagListConfig {
  maxLength?: number
  editOnBackspace?: boolean
  disableUiUpdate?: boolean
  value: string[]
  onBlur?(e: IMdsTagListEditorEventArgs): void
  onChange?(e: IMdsTagListEditorEventArgs): void
  focus?(): void
  onTagClick?(tagValue: string): void
}

interface IMdsPopoutConfig {
  id: string,
  position?: string
  align?: string
  focus?: string
  static?: boolean
  enablePin?: boolean
  onClose?(): void
}

interface IMdsBase {
  type: string
  id: string
  value?: any
  destroy(): void
  val?(): any
  update(config: any): void
}

interface IMdsTagListEditor extends IMdsBase {
  maxLength?: number
  editOnBackspace?: boolean
  disableUiUpdate?: boolean
  editNext?: boolean
  hasSelection?: boolean
  onBlur?(e: IMdsTagListEditorEventArgs): void
  onChange?(e: IMdsTagListEditorEventArgs): void
  onTagClick?(tagValue: string): void
  removeTag(tagValue: string): void
  val?(): string[]
  focus(): void
  update(config: IMdsTagListConfig): void
}

interface Ipopout {
  (id: string | IMdsPopoutConfig): IMdsPopout
  openAtTarget?(config: { id?: string, target?: string }): void
}

interface IMdsPopout extends IMdsBase {
  open(): void
  close(runCallback?: boolean): void
}

interface IMdsOverlay extends IMdsBase {
  type: TMdsOverlayTypes
  focus?: TMdsOverlayFocus
  onClose?(): void
  onBeforeClose?(): boolean
  onOpen?(): void
  onBeforeOpen?(): boolean
  open(): void
  close(): void
  tabHandler?(): void
}

interface ICallback {
  id: string
  func(): void
}

interface IMdsTagListEditorEventArgs {
  currentValue: string[]
  previousValue: string[]
  changedValue: string
}

type TMdsOverlayTypes = 'modal' | 'slideout' | 'overlay' | 'lightbox'
type TMdsOverlayFocus = 'auto' | string
