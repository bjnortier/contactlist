import React from 'react'

import Contact from './Contact'

export default (props) => <>
  {props.contacts.map((contact, i) => <Contact
    key={i}
    contact={contact}
  />)}
</>
