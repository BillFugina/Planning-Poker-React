import * as React from 'react'
import {
  MdsPopout, MdsPopoutMenuPanel, MdsPopoutTitle, MdsMenu, MdsMenuItem, MdsMenuAction, Search,
  TMdsAvatarSize, TMdsPopoutPosition, TMdsPopoutAlign, MdsAvatar, IUserAvatar, UserInfoCard
} from '.'
import { Compare } from '@inmotionnow/utilities'

interface IComponentTranslationsProps {
  SearchPlaceholderText: string
  AddUserText: string
  SearchTitle?: string
}

export interface IUserPickerUser extends IUserAvatar {
  Id: IEntityUID
}

export interface IUserPickerChangedEventArgs {
  currentValue: IEntityUID[]
}

interface IComponentState {
  searchText: string
  selectedValues: IEntityUID[]
}

interface IComponentOwnProps {
  position: TMdsPopoutPosition
  popoutId: string
  align: TMdsPopoutAlign
  size: TMdsAvatarSize
  allUsers: IUserPickerUser[]
  selectedValues: IEntityUID[]
  translations: IComponentTranslationsProps
  onChange(e: IUserPickerChangedEventArgs): void
}

type IComponentProps = Readonly<IComponentOwnProps>

class UserPicker extends React.Component<IComponentProps, IComponentState> {
  // private id: string = `user-picker-${uuid.v4()}`

  constructor(props) {
    super(props)
    this.state = this.initialState(props.selectedValues)
  }

  initialState(selectedValue: IEntityUID[]): IComponentState {
    return { searchText: '', selectedValues: [...selectedValue] }
  }

  componentWillReceiveProps(nextProps: IComponentProps) {
    this.setState(this.initialState(nextProps.selectedValues))
  }

  render() {
    const { props, state } = this
    const { position, align, allUsers, translations, popoutId} = props
    const { searchText, selectedValues } = state

    const handleClick = (user: IUserPickerUser) => (event: React.MouseEvent<Element>) => {
      this.setState(
        (state) => {
          if (state.selectedValues.indexOf(user.Id) < 0) {
            return { selectedValues: state.selectedValues.concat(user.Id) }
          } else {
            return { selectedValues: state.selectedValues.filter(userUID => userUID !== user.Id)}
          }
        }
      )
    }

    const handleSearchTextChange: (value: string) => void = value => {
      this.setState({ searchText: value })
    }

    const handleOnClose: () => void = () => {
      if (!Compare.SequenceEquals(this.props.selectedValues, this.state.selectedValues)) {
        props.onChange({ currentValue: this.state.selectedValues })
      }

    }

    return (
      <MdsAvatar action="add" title={translations.AddUserText} tag="button" popoutId={popoutId} >{translations.AddUserText}
        <MdsPopout position={position} align={align} popoutId={popoutId} onClose={handleOnClose} size="lg">
          {
            !Compare.IsNullOrEmpty(translations.SearchTitle) && <MdsPopoutMenuPanel>
                                                                        <MdsPopoutTitle>
                                                                          {translations.SearchTitle}
                                                                        </MdsPopoutTitle>
                                                                      </MdsPopoutMenuPanel>
          }
          <MdsPopoutMenuPanel>
            <Search placeholder={translations.SearchPlaceholderText} value={searchText} onChange={handleSearchTextChange} />
          </MdsPopoutMenuPanel>
          <MdsPopoutMenuPanel>
            <MdsMenu hasSelectableItems={true}>
              {allUsers
                .filter(user =>
                  // TODO: There must be a better way to do a case-insensitive search. I spent a few minutes looking into this
                  // and nothing really stood out as an optimal solution.
                  user.FirstName.toLowerCase().includes((searchText ? searchText : '@').toLowerCase())
                  || user.LastName.toLowerCase().includes((searchText ? searchText : '@').toLowerCase())
                  || user.Email.toLowerCase().includes((searchText ? searchText : '@').toLowerCase())
                )
                .sort(function(a,b) { return a && b && a.FirstName.localeCompare(b.FirstName) })
                .map(function (user) {
                  return (
                    <MdsMenuItem>
                      <MdsMenuAction onClick={handleClick(user)} tag="button" selected={selectedValues.indexOf(user.Id) > -1}>
                        <UserInfoCard {...{user}} />
                      </MdsMenuAction>
                    </MdsMenuItem>
                  )
                })}
            </MdsMenu>
          </MdsPopoutMenuPanel>
        </MdsPopout>
      </MdsAvatar>
    )
  }
}

export { UserPicker }
