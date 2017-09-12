import * as React from 'react'
import { MdsViewHeader, MdsMainColumn, MdsMasthead, MdsMastheadSection, MdsMastheadGroup, MdsMastheadTitle,
  MdsSection, View, Main, MdsContent } from '.'

interface IComponentTranslationsProps {
  LoadingText: string
}

interface IComponentOwnProps {
  translations: IComponentTranslationsProps
}

type IComponentProps = Readonly<IComponentOwnProps>

const LoadingView: React.StatelessComponent<IComponentProps> = props => {
  const { LoadingText } = props.translations

  return (
    <View
      header={
        <MdsViewHeader>
          <MdsMasthead>
              <MdsMastheadSection>
                <MdsMastheadGroup>
                  <MdsMastheadTitle>
                    {LoadingText}
                  </MdsMastheadTitle>
                </MdsMastheadGroup>
                <MdsMastheadGroup/>
              </MdsMastheadSection>
            </MdsMasthead>
        </MdsViewHeader>
      }
      main={
        <Main
          column1={
            <MdsMainColumn>
              <MdsSection>
                <MdsContent />
              </MdsSection>
            </MdsMainColumn>
          }
          column2={null}
          aside={null}
        />
      }
      footer={null}
    />
  )
}

export { LoadingView }
