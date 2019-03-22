import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Contact from './Contact'
import Spinner from './Spinner'
import Panel from './Panel'

class Contacts extends Component {
  componentDidMount () {
    this.props.getAll()
  }

  render () {
    const { contacts, getting, deleting, del } = this.props
    const contactsArray = Object.keys(contacts).map(key => contacts[key])
    let contents = null
    if (getting === 'done') {
      if (contactsArray.length) {
        contents = <table><tbody>
          {contactsArray.map((contact, i) => <Contact
            key={i}
            contact={contact}
            deleting={deleting[contact.id]}
            del={() => del(contact.id)}
          />)}
        </tbody></table>
      } else {
        contents = <div>no contacts</div>
      }
    }
    return <Panel>
      <h3>Contacts</h3>
      <div>{getting === 'in-progress' ? <Spinner /> : null}</div>
      {contents}
    </Panel>
  }
}

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  getting: PropTypes.string.isRequired,
  deleting: PropTypes.object.isRequired
}

export default Contacts
