import * as React from 'react'
import { ClassNameBuilder } from 'helpers'

interface IComponentOwnProps extends React.HTMLAttributes<HTMLDivElement> {
    flipped?: boolean
}

type IComponentProps = IComponentOwnProps

interface IComponentState {
}

class PokerCardClass extends React.Component<IComponentProps, IComponentState> {

    static defaultProps: Partial<IComponentProps> = {}

    render() {
        const { children, flipped, onClick, ...rest } = this.props
        return (
            <div className="card-container" onClick={onClick} {...{ rest }}>
                <div
                    {
                    ...ClassNameBuilder(
                        'flip-card',
                        flipped ? `flipped` : undefined
                    )
                    }
                >
                    <div className="back" />
                    <div className="front">
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const PokerCard = PokerCardClass

export { PokerCard }
