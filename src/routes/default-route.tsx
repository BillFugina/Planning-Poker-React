import * as React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'

const logo = require('images/logo.png')

interface IComponentOwnProps { }

type IComponentProps = IComponentOwnProps

interface IComponentState { }

class DefaultRouteClass extends React.Component<IComponentProps, IComponentState> {

    static defaultProps: Partial<IComponentProps> = {}

    render() {
        return (
            <div>
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div {
                            height: 100%;
                    }
               `}</style>
                <Grid
                    textAlign="center"
                    style={{ height: '100%' }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Image src={logo} centered/>
                        <Header as="h1">Planning Poker</Header>
                    </Grid.Column>
                </Grid>
            </div>)
    }

}

const DefaultRoute = DefaultRouteClass

export { DefaultRoute }
