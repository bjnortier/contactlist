import '@babel/polyfill'
import expect from 'expect'

class FakeDatabase {
  constructor () {
    this.data = []
  }

  getAll () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([])
      }, 500)
    })
  }
}

describe('Database', () => {
  it('is empty on creation', async () => {
    const db = new FakeDatabase()
    const data = await db.getAll()
    expect(data).toEqual([])
  })
})
