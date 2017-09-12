import * as React from 'react'
import * as Flatpickr from 'flatpickr'
import {
  Calendar,
  MdsButton,
  MdsButtons,
  MdsIcon,
  MdsLevel,
  MdsLevelLeft,
  MdsLevelRight,
  MdsLink,
  MdsPopout,
  MdsPopoutMenuPanel,
  MdsPopoutTitle,
  TMdsPopoutAlign,
  TMdsPopoutPosition
} from '.'
import * as moment from 'moment'

interface IComponentTranslationsProps {
  TitleText: string
  LabelText?: string
  ClearButtonText: string
  SaveButtonText: string
}

interface IComponentOwnProps {
  value: string
  enableTime?: boolean
  position?: TMdsPopoutPosition
  popoutId: string
  align?: TMdsPopoutAlign
  toggleContent: React.ReactElement<any> | string
  translations: IComponentTranslationsProps
  onChange(e: IPopoutDatepickerChangedEventArgs): void
}

interface IComponentState {
  selectedDate: moment.Moment
}

export interface IPopoutDatepickerChangedEventArgs {
  prevDate: string
  nextDate: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class PopoutDatePicker extends React.Component<IComponentProps, IComponentState> {

  constructor(props) {
    super(props)
    this.state = this.initialState()
  }

  initialState(): IComponentState {
    const { props } = this
    return { selectedDate: this.parseOriginalDate(props.value) }
  }

  parseOriginalDate(originalDate: string) {
    // Convert UTC to Local when receiving date because the date picker should be dealing in local date time
    return moment.utc(originalDate).local()
  }

  render() {
    const { state, props } = this
    const { position, align, enableTime, translations, toggleContent, popoutId } = props
    const { selectedDate } = state
    const handleChange: Flatpickr.EventCallback = (selectedDates, dateStr) => {
      this.setState({ selectedDate: moment(dateStr) })
    }

    const onClearClick = () => {
      const { popoutId } = this.props
      window.mds.popout(popoutId).close(false)
      if (this.props.value) {
        this.props.onChange({ prevDate: this.props.value, nextDate: null })
      }
      this.setState({ selectedDate: null })
    }

    const onSaveClick = () => {
      const { props, state } = this
      window.mds.popout(props.popoutId).close(false)
      if (this.parseOriginalDate(props.value).toISOString() !== state.selectedDate.toISOString()) {
        // Convert back to UTC before updating
        this.props.onChange({ prevDate: props.value, nextDate: state.selectedDate.utc().toISOString() })
      }
    }

    const onCancelClick = () => {
      window.mds.popout(popoutId).close(false)
      this.setState(this.initialState())
    }

    return (
      <MdsLink popoutTarget={popoutId} size="med">
        <MdsIcon name="calendar"/>{' '}{toggleContent}
        <MdsPopout {...{ position, align, focus: '.flatpickr-day.selected', onClose: onCancelClick, popoutId: popoutId, size: 'lg' }}>
          <MdsPopoutMenuPanel>
            {translations.TitleText &&
              (
                <MdsPopoutMenuPanel>
                  <MdsPopoutTitle>
                    {translations.TitleText}
                  </MdsPopoutTitle>
                </MdsPopoutMenuPanel>
              )
            }
          </MdsPopoutMenuPanel>
          <MdsPopoutMenuPanel>
            <Calendar {...{ label: translations.LabelText, onChange: handleChange, enableTime, value: selectedDate && selectedDate.toISOString() }} />
          </MdsPopoutMenuPanel>
          <MdsPopoutMenuPanel>
            <MdsLevel>
              <MdsLevelLeft>
                <MdsButtons {...{ inset: 'med' }}>
                  {this.props.value && <MdsButton {...{ onClick: onClearClick, appearance: 'flat' }}>{translations.ClearButtonText}</MdsButton>}
                </MdsButtons>
              </MdsLevelLeft>
              <MdsLevelRight>
                <MdsButtons>
                  <MdsButton {...{ onClick: onCancelClick }}><MdsIcon name="close"/></MdsButton>
                  <MdsButton {...{ onClick: onSaveClick, theme: 'success' }}>{translations.SaveButtonText}</MdsButton>
                </MdsButtons>
              </MdsLevelRight>
            </MdsLevel>
          </MdsPopoutMenuPanel>
        </MdsPopout>
      </MdsLink>
    )

  }
}

export { PopoutDatePicker }
