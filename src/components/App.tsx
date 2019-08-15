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
              <img className="thankYouPhoto" src={thankyouBg} title="thank you"/>
            </div>
            <div className="title">
              Thank You!
            </div>
            <p className="description">
              We are underway onto the next chapter of our lives together.<br/>
              We'll always look back to the big day and all the love and support you showed us. We are so lucky to have such amazing friends and family.<br/>
              We hope you all had a great night. From the bottom of our hearts, THANK YOU for making it extra special.<br/>
              <br/>
              Sincerely,<br/>
              <br/>
              Chris &amp; Vivian
            </p>
            <p className="description">
              You can find all the photos from the wedding in the gallery linked below. Feel free to download and post them to your own social media channels.
            </p>
            <p>
              <button onClick={this.handleOpenGallery}>
                Gallery
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }

  private handleOpenGallery = () => {
    window.location.href = GALLERY_URL
  }
}