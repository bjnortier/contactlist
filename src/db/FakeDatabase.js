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
      }, 500)
    })
  }

  create (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const primaryKey = this.nextPrimaryKey++
        this.data[primaryKey] = { id: primaryKey, ...value }
        resolve(primaryKey)
      }, 500)
    })
  }

  delete (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        delete this.data[id]
        resolve()
      }, 500)
    })
  }
}

export default FakeDatabase
