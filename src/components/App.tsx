import * as React from 'react'

import * as Scroll from 'react-scroll'
import { Sticky, StickyContainer } from 'react-sticky'

import Hero from './Hero'
import PageSection from './PageSection'
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
import bride from '../media/images/bride.jpg'
import groom from '../media/images/groom.jpg'
import takingPhotos from '../media/images/photos.jpg'

import './App.scss'
import './AppMedia.scss'

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

  private scrollToRSVP = (): void => {
    let scroller = Scroll.scroller
    scroller.scrollTo('scrollToRSVP', {
      duration: 900,
      delay: 10,
      smooth: true,
      offset: -20
    })
  }

  public render() {
    return (
      <div className="App">
        <Scroll.Element name="scrollToTop"></Scroll.Element>

          <Hero/>
          <StickyContainer style={{ overflow: 'visible'}}>
            <Sticky>
              {({style}) => (
                <nav style={style}>
                  <div className="container">
                    <div className="col-4 logo-wrapper">
                      <div className="cv-logo"></div>
                    </div>
                    <div className="col-8 link-wrapper">
                      <ul>
                        <li><Scroll.Link to="scrollToTop" smooth={true} offset={-20} duration={900}>Top</Scroll.Link></li>
                        <li><Scroll.Link to="scrollToStory" smooth={true} offset={-20} duration={900}>Our Story</Scroll.Link></li>
                        <li><Scroll.Link to="scrollToWhere" smooth={true} offset={-20} duration={900}>Where</Scroll.Link></li>
                        <li><Scroll.Link to="scrollToWhen" smooth={true} offset={-90} duration={900}>When</Scroll.Link></li>
                        <li className="rsvp ribbon" onClick={this.scrollToRSVP}>RSVP</li>
                      </ul>
                    </div>
                  </div>
                </nav>
              )}
            </Sticky>


          <PageSection className="detailsSection" backgroundColor="transparent">
            <section>
              <div className="container-fluid">
                <div className="col-5 text-right"><Person name="Chris Lee-Shanok" photo={groom}/></div>
                <div className="col-2 text-center and-container"><span className="and">&</span></div>
                <div className="col-5 text-left"><Person name="Vivian Li" photo={bride} /></div>
              </div>
              <div className="container-fluid are-getting-married">
                <div className="col-12">
                  <h2>Are getting married</h2>
                  <p className="smaller">on October 13, 2018 in Kettleby, Ontario</p>
                </div>
              </div>
            </section>
          </PageSection>

          <Scroll.Element name="scrollToStory"></Scroll.Element>
          <PageSection className="storySection">
            <section className="story">
              <h1>Our Story</h1>
              <p>
                On July 1st, 2005, both Chris and Vivian were invited by mutual friends to a Canada Day fireworks show in Scarborough. At the time, Chris had just been accepted to the University of Toronto and Vivian had finished Grade 11 in downtown Toronto. They kept in contact through MSN messenger and occasionally saw each other in group gatherings.
              </p>
              <p>
                A year later, Vivian began attending the University of Toronto and enrolled in the same biochemistry course as Chris. Now classmates, they got to know each other a bit more as friends and bonded over their mutual love for extremely spicy food.
              </p>
              <p>
                In 2010, after spending months going on dinner and movie dates as friends, Vivian and Chris finally had the ‘talk’ and officially became a couple over the Victoria Day long weekend at the very same beach they first met five years prior. Two weeks later, Chris invited Vivian to his house to meet his parents for dinner.
              </p>
              <p>
                Seven years later they decided to take a trip to Japan. After craftily hiding the ring in furniture at several AirBnBs, Chris proposed to Vivian on April 06, 2017. Caught completely by surprise, her first response was “Really?!”, and to this day still hasn’t confirmed by saying “Yes.”
              </p>
            </section>
          </PageSection>

          <Scroll.Element name="scrollToWhere"></Scroll.Element>
          <PageSection className="whenAndWhereSection" backgroundColor="#f6f8fb">
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


              <Scroll.Element name="scrollToWhen"></Scroll.Element>
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
          </PageSection>

          <PageSection>
            <img className="full-width-photo" src={takingPhotos}/>
          </PageSection>

          <Scroll.Element name="scrollToRSVP"></Scroll.Element>
          <PageSection className="rsvpSection">
              <div className="rsvp-wrapper">
                <div className="details">
                  <h1>Will you celebrate with us?</h1>
                  <p className="important">
                    Please let us know by August 31st if you are able to attend!
                  </p>
                  <p>
                    If you are unable to RSVP electronically, please <a href="mailto:chrisxvivian@gmail.com">email us</a> or call Chris @ 1 (647) 618-5787.
                  </p>

                  <button className="rsvp-button" onClick={this.openRSVPURL}>Continue to RSVP</button>
                </div>
              </div>
          </PageSection>
        </StickyContainer>
      </div>
    )
  }
}

export default App
