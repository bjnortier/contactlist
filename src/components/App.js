import React, { Component } from 'react'

import FormContainer from '../containers/FormContainer'
import ContactsContainer from '../containers/ContactsContainer'

class App extends Component {
  render () {
    return <div>
      <FormContainer />
      <ContactsContainer />
    </div>
  }
}

export default App
