'use strict'

describe('Client :: service', () => {
  describe('getById', () => {
    it('should return a Client sucessfully', async () => {
      const { getById } = require('./service')
      const id = '1'
      const result = await getById(id)
      expect(result.id).toEqual(id)
    })
    it('should return an error it parameter is invalid', async () => {
      const { getById } = require('./service')
      const id = undefined
      try {
        await getById(id)
      } catch (error) {
        expect(error.message).toEqual('INVALID_PARAMETER')
      }
    })
  })
})
