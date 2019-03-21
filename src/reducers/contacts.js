import { combineReducers } from 'redux'
import { cloneDeep } from 'lodash'

const creating = (state = 'initial', action) => {
  switch (action.type) {
    case 'TRY_ADD_CONTACT': return 'in-progress'
    case 'ADD_CONTACT_SUCCESS': return 'done'
    case 'ADD_CONTACT_ERROR': return 'error'
    default: return state
  }
}

const getting = (state = 'initial', action) => {
  switch (action.type) {
    case 'TRY_GET_CONTACTS': return 'in-progress'
    case 'GET_CONTACTS_SUCCESS': return 'done'
    case 'GET_CONTACTS_ERROR': return 'error'
    default: return state
  }
}

const deleting = (state0 = {}, action) => {
  switch (action.type) {
    case 'TRY_DELETE_CONTACT': {
      const state1 = { ...state0 }
      state1[action.id] = 'in-progress'
      return state1
    }
    case 'DELETE_CONTACT_SUCCESS': {
      const state1 = { ...state0 }
      state1[action.id] = 'done'
      return state1
    }
    case 'DELETE_CONTACT_ERROR': {
      const state1 = { ...state0 }
      state1[action.id] = 'error'
      return state1
    }
    default: return state0
  }
}

const objects = (state0 = {}, action) => {
  switch (action.type) {
    case 'CREATE_CONTACT_SUCCESS': {
      const state1 = { ...state0 }
      state1[action.id] = {
        id: action.id,
        name: action.name,
        number: action.number
      }
      return state1
    }
    case 'GET_CONTACTS_SUCCESS': {
      return cloneDeep(action.contacts)
    }
    case 'DELETE_CONTACT_SUCCESS': {
      const state1 = { ...state0 }
      delete state1[action.id]
      return state1
    }
    default:
      return state0
  }
}

export default combineReducers({
  creating,
  getting,
  deleting,
  objects
})
