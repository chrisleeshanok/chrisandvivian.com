import * as React from 'react'
import './Person.scss'

interface iProps {
  photo?: any
  name: string

}

interface iState {

}

export default class Person extends React.PureComponent<iProps, iState> {

  private get image(): JSX.Element | null {
    if (this.props.photo) {
      return <img src={this.props.photo}/>
    }

    return null
  }

  public render(): JSX.Element {
    return (
      <div className="Person">
        <div className="photo">
          <div className="image">
            {this.image}
          </div>
        </div>
        <div className="name">
          {this.props.name}
        </div>
      </div>
    )
  }
}