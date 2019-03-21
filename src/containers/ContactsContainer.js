import { connect } from 'react-redux'

import Contacts from '../components/Contacts'

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: id => dispatch({ type: 'DELETE_CONTACT', id })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
