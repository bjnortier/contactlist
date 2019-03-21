export const addContact = (name, number) => {
  return {
    type: 'ADD_CONTACT',
    name,
    number
  }
}
