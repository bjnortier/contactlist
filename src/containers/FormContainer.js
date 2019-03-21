import { connect } from 'react-redux'

import { addContact } from '../actions/contacts'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (name, number) =>
      dispatch(addContact(name, number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
