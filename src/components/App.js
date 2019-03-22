import React, { Component } from 'react'

import Reset from './Reset'
import FormContainer from '../containers/FormContainer'
import ContactsContainer from '../containers/ContactsContainer'

class App extends Component {
  render () {
    return <div>
      <Reset />
      <FormContainer />
      <div />
      <ContactsContainer />
    </div>
  }
}

export default App
