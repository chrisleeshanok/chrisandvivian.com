import * as React from 'react'

interface iProps {

}

interface iState {

}

import heroGraphic from '../media/images/heroGraphic.png'

export default class Hero extends React.PureComponent<iProps, iState> {
  public render(): JSX.Element {
    return (
      <section className="Hero">
        <div className="centered-wrapper">
          <img src={heroGraphic} className="heroGraphic"/>
        </div>
      </section>
    )
  }
}