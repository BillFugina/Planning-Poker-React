export * from './mds-control-input'
export * from './mds-control-select'
export * from './mds-control-textarea'

export type IMdsControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
export type IMdsReactControl<T extends IMdsControl> = React.HTMLAttributes<T> & Partial<T>

export type IMdsControlChangeEventArgs = {
  id: string
  previousValue: any
  currentValue: any
}
export type IMdsControlChangeHandler = (e: IMdsControlChangeEventArgs) => any

export type IMdsControlAdditionalProps<T extends IMdsControl> = {
  required: boolean
  hasError?: boolean
  disabled?: boolean
  customClass?: string
  block?: boolean
  handleChange?: IMdsControlChangeHandler
  inputRef?(element: T): void
}
export type IMdsControlProps<T extends IMdsControl> = IMdsReactControl<T> & IMdsControlAdditionalProps<T>

export type IMdsTextareaControlProps = IMdsControlProps<HTMLTextAreaElement>
export type IMdsInputControlProps = IMdsControlProps<HTMLInputElement>
export type IMdsSelectControlProps = IMdsControlProps<HTMLSelectElement>
