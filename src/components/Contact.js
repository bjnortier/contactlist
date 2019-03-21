import React from 'react'
import PropTypes from 'prop-types'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Spinner from './Spinner'

const Contact = (props) => {
  const { contact, deleting, del } = props
  return <div>
    {contact.name}:{contact.number}
    <button onClick={del} ><FontAwesomeIcon icon={faTrashAlt} /></button>
    {deleting === 'in-progress' ? <Spinner /> : null}
  </div>
}

Contact.propTypes = {
  deleting: PropTypes.string,
  del: PropTypes.func.isRequired
}

export default Contact
