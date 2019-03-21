import '@babel/polyfill'
import expect from 'expect'

import FakeDatabase from '../../src/db/FakeDatabase'

describe('Database', () => {
  it('is empty on creation', async () => {
    const db = new FakeDatabase()
    const data = await db.getAll()
    expect(data).toEqual({})
  })

  it('can accept new contact', async () => {
    const db = new FakeDatabase()
    const id = await db.create({ name: 'bob', number: '0778' })
    const allContacts = await db.getAll()
    expect(allContacts).toEqual({
      [id]: { id, name: 'bob', number: '0778' }
    })

    // Ensure the DB data is not mutated
    allContacts[0].name = 'sarah'
    const allContacts2 = await db.getAll()
    expect(allContacts2).toEqual({
      [id]: { id, name: 'bob', number: '0778' }
    })
  })

  it('can create two contacts', async () => {
    const db = new FakeDatabase()
    await db.create({ name: 'bob', number: '0456' })
    await db.create({ name: 'john', number: '0123' })
    const allContacts = await db.getAll()
    expect(allContacts).toEqual({
      0: { id: 0, name: 'bob', number: '0456' },
      1: { id: 1, name: 'john', number: '0123' }
    })
  })

  it('can accept default values', async () => {
    const db = new FakeDatabase([
      { name: 'john', number: '7777' }
    ])
    const allContacts = await db.getAll()
    expect(allContacts).toEqual({
      0: { id: 0, name: 'john', number: '7777' }
    })
  })

  it('can delete values by id', async () => {
    const db = new FakeDatabase([
      { name: 'john', number: '7777' }
    ])
    await db.delete(0)
    const allContacts = await db.getAll()
    expect(allContacts).toEqual({})
  })
})
