export default (state0 = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      const state1 = state0.slice()
      state1.push({ name: action.name, number: action.number })
      return state1
    default:
      return state0
  }
}
