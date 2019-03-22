import React from 'react'
import PropTypes from 'prop-types'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Spinner from './Spinner'
import Button from './Button'
import HSpace from './HSpace'

const Contact = (props) => {
  const { contact, deleting, del } = props
  const inProgress = deleting === 'in-progress'
  const spinner = inProgress ? <><HSpace /><Spinner /></> : null
  return <tr>
    <td>{contact.name}</td>
    <td>{contact.number}</td>
    <td><Button
      onClick={del}
      disabled={inProgress}
    >
      <FontAwesomeIcon icon={faTrashAlt} />{spinner}
    </Button></td>
  </tr>
}

Contact.propTypes = {
  deleting: PropTypes.string,
  del: PropTypes.func.isRequired
}

export default Contact
