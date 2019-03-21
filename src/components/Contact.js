import React from 'react'
import PropTypes from 'prop-types'

const Contact = (props) => {
  const { contact, deleting, del } = props
  return <div>
    {contact.name}:{contact.number}
    <button onClick={del} >-</button>
    {deleting}
  </div>
}

Contact.propTypes = {
  deleting: PropTypes.string,
  del: PropTypes.func.isRequired
}

export default Contact
