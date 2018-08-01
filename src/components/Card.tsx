import * as React from 'react'

import './Card.scss'

interface iProps {
  image: string
  className?: string
}

interface iState {}

export default class Card extends React.PureComponent<iProps, iState> {

  get className(): string {
    return this.props.className ? `Card ${this.props.className}` : 'Card'
  }

  public render(): JSX.Element {
    return (
      <div className={this.className}>
        <div className="base">
          <div className="photo">
          <img src={this.props.image}/>
          </div>
          <div className="details">
            {this.props.children}
          </div>
        </div>
    </div>
    )
  }
}