import FakeDatabase from '../db/FakeDatabase'
const db = new FakeDatabase([
  { name: 'bob', number: '0123' },
  { name: 'sarah', number: '4567' }
])

export const create = (name, number) => {
  return dispatch => {
    dispatch({
      type: `TRY_CREATE_CONTACT`
    })
    db.create({ name, number })
      .then(id => {
        dispatch({
          type: 'CREATE_CONTACT_SUCCESS',
          id,
          name,
          number
        })
      }, err => {
        console.error(err)
        dispatch({
          type: 'CREATE_CONTACT_ERROR',
          message: err.message
        })
      })
  }
}

export const getAll = () => {
  return dispatch => {
    dispatch({
      type: `TRY_GET_CONTACTS`
    })
    db.getAll()
      .then(contacts => {
        dispatch({
          type: 'GET_CONTACTS_SUCCESS',
          contacts
        })
      }, err => {
        console.error(err)
        dispatch({
          type: 'GET_CONTACTS_ERROR',
          message: err.message
        })
      })
  }
}

export const del = (id) => {
  return dispatch => {
    dispatch({
      type: `TRY_REMOVE_CONTACTS`
    })
    db.getAll()
      .then(contacts => {
        dispatch({
          type: 'REMOVE_CONTACT_SUCCESS',
          id
        })
      }, err => {
        console.error(err)
        dispatch({
          type: 'REMOVE_CONTACT_ERROR',
          id,
          message: err.message
        })
      })
  }
}
