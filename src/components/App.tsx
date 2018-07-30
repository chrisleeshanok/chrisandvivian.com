import * as React from 'react'
import './App.scss'

import Hero from './Hero'
import Page from './Page'
import Person from './Person'

interface iProps {

}

interface iState {

}

class App extends React.PureComponent<iProps, iState> {
  public render() {
    return (
      <div className="App">
        <Hero/>
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

        <Page className="storySection" backgroundColor="#213352">
          <section className="story">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in justo sit amet nulla placerat fringilla at ac sem. Ut commodo, neque quis lacinia tristique, lectus massa pharetra massa, eget posuere ligula magna et nibh. Etiam in rutrum justo. Vivamus tempus laoreet erat quis rutrum. Curabitur molestie dignissim nibh, placerat lacinia libero. Vestibulum non tellus neque. Nam placerat eget elit id malesuada. In hendrerit consequat nibh non cursus. Integer congue eu neque id ultrices. Fusce lacinia placerat nulla a varius. Integer tincidunt odio nec rhoncus viverra. Quisque nec consectetur quam. Etiam sed dictum erat, id pellentesque mauris. Aenean pharetra euismod semper. Sed et imperdiet lacus.
            </p>
          </section>
        </Page>
        <Page>

          <section className="story">
            <h1>The Wedding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in justo sit amet nulla placerat fringilla at ac sem. Ut commodo, neque quis lacinia tristique, lectus massa pharetra massa, eget posuere ligula magna et nibh. Etiam in rutrum justo. Vivamus tempus laoreet erat quis rutrum. Curabitur molestie dignissim nibh, placerat lacinia libero. Vestibulum non tellus neque. Nam placerat eget elit id malesuada. In hendrerit consequat nibh non cursus. Integer congue eu neque id ultrices. Fusce lacinia placerat nulla a varius. Integer tincidunt odio nec rhoncus viverra. Quisque nec consectetur quam. Etiam sed dictum erat, id pellentesque mauris. Aenean pharetra euismod semper. Sed et imperdiet lacus.
            </p>
          </section>

          <section className="wedding-party">
            <h1>The Wedding Party</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in justo sit amet nulla placerat fringilla at ac sem. Ut commodo, neque quis lacinia tristique, lectus massa pharetra massa, eget posuere ligula magna et nibh. Etiam in rutrum justo. Vivamus tempus laoreet erat quis rutrum. Curabitur molestie dignissim nibh, placerat lacinia libero. Vestibulum non tellus neque. Nam placerat eget elit id malesuada. In hendrerit consequat nibh non cursus. Integer congue eu neque id ultrices. Fusce lacinia placerat nulla a varius. Integer tincidunt odio nec rhoncus viverra. Quisque nec consectetur quam. Etiam sed dictum erat, id pellentesque mauris. Aenean pharetra euismod semper. Sed et imperdiet lacus.
            </p>
          </section>

          <section className="rsvp">
            <h1>RSVP</h1>
          </section>


          <section className="faq">
            <h1>FAQ</h1>
          </section>

          <section className="contact">
            <h1>Contact</h1>
          </section>
        </Page>


      </div>
    )
  }
}

export default App
