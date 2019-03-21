import { connect } from 'react-redux'

import Contacts from '../components/Contacts'
import { getAll, del } from '../actions/contacts'

const mapStateToProps = (state, ownProps) => {
  return {
    getting: state.contacts.getting,
    deleting: state.contacts.deleting,
    contacts: state.contacts.objects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => dispatch(getAll()),
    del: (id) => dispatch(del(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts)
