import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

interface IComponentState { }

class Portal extends React.Component<IComponentProps, IComponentState> {
  private node: HTMLElement

  componentDidMount() {
    this.node = document.createElement('div')
    this.node.className = 'portal'
    document.body.appendChild(this.node)
    this.renderPortal(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps)
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node)
    document.body.removeChild(this.node)
  }

  renderPortal = (props) => {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, props.children, this.node)
  }

  render() {
    return null
  }
}

export { Portal }
