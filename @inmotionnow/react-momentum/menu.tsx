import * as React from 'react'
import { MdsMenu, MdsMenuSubmenu, MdsMenuItem, MdsMenuAction } from '.'

interface IMenuItem {
  text: string
  link?: string
  active?: boolean
  items?: IMenuItem[]
}

interface IComponentOwnProps {
  items: IMenuItem[]
}

type IComponentProps = Readonly<IComponentOwnProps>

const Menu: React.StatelessComponent<IComponentProps> = props => {
  const { items } = props
  return (
    <MdsMenu>
      {items.map(
        item => (
          <MdsMenuItem>
            {item.items &&
              <MdsMenuSubmenu heading={item.text}>
                {item.items.map(function(subitem) {
                  return (
                    <MdsMenuItem>
                      <MdsMenuAction tag="link" link={subitem.link} active={subitem.active}><span>{subitem.text}</span></MdsMenuAction>
                    </MdsMenuItem>
                  )
                })}
              </MdsMenuSubmenu>
            }
            {!item.items &&
              <MdsMenuAction tag="link" link={item.link} active={item.active}><span>{item.text}</span></MdsMenuAction>
            }
          </MdsMenuItem>
        )
      )}
    </MdsMenu>
  )
}

export { Menu }
