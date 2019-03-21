import { connect } from 'react-redux'

import { create } from '../actions/contacts'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {
    creating: state.contacts.creating
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (name, number) =>
      dispatch(create(name, number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
