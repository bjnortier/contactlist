import { cloneDeep } from 'lodash'

class FakeDatabase {
  constructor (defaultValues) {
    defaultValues = defaultValues || []
    this.data = {}
    this.nextPrimaryKey = 0
    defaultValues.forEach(value => {
      const id = this.nextPrimaryKey++
      this.data[id] = {
        id,
        ...value
      }
    })
  }

  getAll () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cloneDeep(this.data))
      }, 10)
    })
  }

  create (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const primaryKey = this.nextPrimaryKey++
        this.data[primaryKey] = { id: primaryKey, ...value }
        resolve(primaryKey)
      }, 10)
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        delete this.data[id]
        resolve()
      }, 10)
    })
  }
}

export default FakeDatabase
