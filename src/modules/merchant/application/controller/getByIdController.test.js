'use strict'

describe('Merchant :: Controller ::', () => {
  describe('getByIdController', () => {
    it('it should return a Merchant sucessfully', async () => {
      const controller = require('./getByIdController')
      const body = {
        id: '1'
      }
      const result = await controller(body)
      expect(result.id).toEqual(body.id)
    })
  })
})
