import * as React from 'react'

import './Page.scss'

interface iProps {
  backgroundColor?: string
  className?: string
}

interface iState {

}

export default class Hero extends React.PureComponent<iProps, iState> {

  get backgroundColor(): string {
    return this.props.backgroundColor || '#ffffff'
  }

  get className(): string {
    return this.props.className ? `${this.props.className} Page` : 'Page'
  }

  public render(): JSX.Element {
    return (
      <div className={this.className} style={{backgroundColor: this.backgroundColor}}>
        {this.props.children}
      </div>
    )
  }
}