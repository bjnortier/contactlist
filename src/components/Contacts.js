import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Contact from './Contact'

class Contacts extends Component {
  componentDidMount () {
    this.props.getAll()
  }

  render () {
    const { contacts, getting, deleting } = this.props
    const contactsArray = Object.keys(contacts).map(key => contacts[key])
    return <>
      <div>{getting}</div>
      {contactsArray.map((contact, i) => <Contact
        key={i}
        contact={contact}
        deleting={deleting[contact.id]}
      />)}
    </>
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  getting: PropTypes.string.isRequired,
  deleting: PropTypes.object.isRequired
}

export default Contacts
