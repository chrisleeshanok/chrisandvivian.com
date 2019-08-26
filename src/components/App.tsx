import * as React from 'react'

import "./App.scss"
const thankyouBg = require('../media/images/thankyou-bg.jpg')
interface iProps {

}

interface iState {

}

const GALLERY_URL = 'https://adobe.ly/2NbmiAX'

export default class App extends React.PureComponent<iProps, iState> {

  public render() {
    return (
      <div className="ThankYouRoot">
        <div className="vertical-wrapper">
          <div className="horizontal-wrapper">
            <div className="photo">
              <div className="ribbon">
              Thank You!
              </div>
              <img className="thankYouPhoto" src={thankyouBg} title="thank you"/>
            </div>
            <p className="description">
              Our wedding has come and gone, and we have started an exciting chapter of our lives together.
            </p>
            <p className="description">
              We feel blessed to have had you all celebrating the big day with us.
            </p>
            <p className="description">
              From the bottom of our hearts, thank you for making our day so special.
            </p>
            <p className="description">
              Sincerely,<br/>
              <br/>
              Chris &amp; Vivian
            </p>
            <hr/>
            <p className="description">
              You can find all the photos from the wedding in the gallery linked below. Feel free to download and post them to your own social media channels.
            </p>
            <div className="gallery">
              <button onClick={this.handleOpenGallery}>
                Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private handleOpenGallery = () => {
    window.location.href = GALLERY_URL
  }
}