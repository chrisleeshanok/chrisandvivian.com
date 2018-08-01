import * as React from 'react'
import './App.scss'

import Hero from './Hero'
import Page from './Page'
import Person from './Person'
import Card from './Card'

interface iProps {

}

interface iState {
  isLoaded: boolean
}

import themanorCeremonyImage from '../media/images/themanor-ceremony2.jpg'
import themanorReceptionImage from '../media/images/themanor-elizabeth-hall.jpg'
import themanor from '../media/images/themanor.jpg'

class App extends React.PureComponent<iProps, iState> {

  constructor(props: iProps) {
    super(props)

    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }

  private openRSVPURL = (): void => {
    window.location.href = 'https://withjoy.com/chrisandvivian2018/rsvp';
  }

  public render() {
    return (
      <div className="App">
        {!this.state.isLoaded ? <div className="loading">Loading</div> : null}
        <Hero/>

        <nav>
          <div className="wrapper">
            <ul>
              <li>Top</li>
              <li>Groom & Bride</li>
              <li>When & Where</li>
            </ul>
          </div>
        </nav>

        <Page className="detailsSection">
          <section className="details">
            <Person name="Chris Lee-Shanok"/>
            <div className="and">&</div>
            <Person name="Vivian Li"/>
            <div className="are-getting-married">
              <h2>Are getting married</h2>
              <p className="smaller">on October 13, 2018 in Kettleby, Ontario</p>
            </div>
          </section>
        </Page>

        <Page className="storySection">
          <section className="story">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in justo sit amet nulla placerat fringilla at ac sem. Ut commodo, neque quis lacinia tristique, lectus massa pharetra massa, eget posuere ligula magna et nibh. Etiam in rutrum justo. Vivamus tempus laoreet erat quis rutrum. Curabitur molestie dignissim nibh, placerat lacinia libero. Vestibulum non tellus neque. Nam placerat eget elit id malesuada. In hendrerit consequat nibh non cursus. Integer congue eu neque id ultrices. Fusce lacinia placerat nulla a varius. Integer tincidunt odio nec rhoncus viverra. Quisque nec consectetur quam. Etiam sed dictum erat, id pellentesque mauris. Aenean pharetra euismod semper. Sed et imperdiet lacus.
            </p>
          </section>
        </Page>

        <Page className="whenAndWhereSection" backgroundColor="#f6f8fb">
          <section>
            <h1>When & Where</h1>

            <div className="wrapper">
              <Card className="full-width" image={themanor}>
                <div className="description">
                  <h3>The Venue: The Manor ByPeterandPauls.com</h3>
                  <p>
                    Nestled amongst the magnificent greens of The Carrying Place Golf & Country Club, the venue’s modern interior and impeccable setting is unforgettable.
                    Located 20 minutes north of Vaughan, The Manor is anchored by a beautiful man-made pond and lush greenery.
                  </p>
                </div>
                <div className="address">
                  16750 Weston Rd, Kettleby, ON L0G 1J0<br/>
                  <a href="https://goo.gl/maps/LDxg7h75DHn" target="_blank">Open in Maps</a>
                </div>
              </Card>
            </div>

            <div className="wrapper">
              <Card className="left" image={themanorCeremonyImage}>
                <div className="description">
                  <h3>Wedding Ceremony</h3>
                  <p>
                    Our ceremony will take place outdoors, but we'll be covered. We're good for whatever weather a Canadian October brings us.
                  </p>
                </div>
                <div className="time">
                  October 13, 2018<br/>
                  5:00pm to 6:00pm
                </div>
              </Card>

              <Card className="right" image={themanorReceptionImage}>
                <div className="description">
                  <h3>Wedding Party</h3>
                  <p>
                    Please join us for cocktails, dinner, dancing, games, photos, and a night packed with entertainment.
                    We have the lower (Elizabeth) hall which means we have full access to the grounds, including the lake!
                  </p>
                </div>
                <div className="time">
                  October 13, 2018<br/>
                  6:00pm to 1:00am
                </div>
              </Card>
            </div>

          </section>
        </Page>

        <Page className="rsvpSection">
          <div className="rsvp-wrapper">
            <div className="photo">

            </div>
            <div className="details">
              <h1>Will you celebrate with us?</h1>
              <p className="important">
                Please let us know by August 31st if you are able to attend!
              </p>
              <p>
                We are using WithJoy's RSVP system. If you experience any trouble, <a href="mailto:chrisxvivian@gmail.com">email us</a> and we'll help you out. <br/>
                If you are unable to RSVP electronically, please call Chris @ 1 (647) 618-5787.
              </p>

              <button className="rsvp-button" onClick={this.openRSVPURL}>RSVP</button>
            </div>
          </div>
        </Page>
      </div>
    )
  }
}

export default App
