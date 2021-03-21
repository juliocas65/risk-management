'use strict'
const request = require('supertest')
const server = require('././../../../../../server')

describe('Merchant :: Routes ::', () => {
  describe('GET /:id', () => {
    it('should return a merchant sucessfully', async (done) => {
      const id = '1'
      const result = await request(server).get(`/merchant/${id}`)
      expect(result.status).toBe(200)
      expect(result.body.id).toEqual(id)
      done()
    })
    it('should should return an error', async (done) => {
      const id = 'X'
      const result = await request(server).get(`/merchant/${id}`)
      expect(result.status).toBe(500)
      expect(result.body.message).toEqual('NO_RESULTS_AVAILABLE')
      done()
    })
  })
})
