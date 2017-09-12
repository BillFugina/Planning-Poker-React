import * as React from 'react'
import { Guid } from '@inmotionnow/utilities'
import { MdsTabs, MdsTabList, MdsTab, MdsTabLink, MdsTabsSection } from './particles/mds-tabs'

export interface ITabContent {
  Title: string
  Name: string
  Content: React.ReactNode
}

interface IComponentOwnProps {
  name: string
  selectedSectionName: string
  sections: ITabContent[]
  onChange?(newTabSelection: string): void
}

interface IComponentState {
  selectedTabId: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class Tabs extends React.Component<IComponentProps, IComponentState> {
  private id: string = `tabs-${Guid.NewId()}`
  constructor(props) {
    super(props)
    this.state = { selectedTabId: `${props.name}-${props.selectedSectionName}` }
  }

  componentDidMount() {
    window.mds.tabs.add({
      id: this.id,
      func: this.updateSelected.bind(this)
    })
  }

  updateSelected(newTabSelection: string) {
    const { onChange } = this.props

    this.setState({ selectedTabId: newTabSelection})

    if (onChange) {
      onChange(newTabSelection)
    }
  }

  render() {
    const { props } = this
    const { selectedTabId } = this.state
    const { name, sections } = props

    const handleClick = (newTabSelection: string) => (event: React.MouseEvent<Element>) => {
      event.preventDefault()
      this.updateSelected(newTabSelection)
    }

    return (
      <MdsTabs id={this.id}>
        <MdsTabList>
          {sections.map(section =>
            <MdsTab>
              <MdsTabLink
                name={`${name}-${section.Name}`}
                onClick={handleClick(`${name}-${section.Name}`)}
                isSelected={selectedTabId === `${name}-${section.Name}`}
              >{section.Title}
              </MdsTabLink>
            </MdsTab>
          )}
        </MdsTabList>
        {sections.map(section =>
          <MdsTabsSection name={`${name}-${section.Name}`} isActive={`${name}-${section.Name}` === selectedTabId}>
            {section.Content}
          </MdsTabsSection>
        )}
      </MdsTabs>
    )
  }
}

export { Tabs }
