'use strict'

describe('Client :: Controller ::', () => {
  describe('getByIdController', () => {
    it('it should return a Client sucessfully', async () => {
      const controller = require('./getByIdController')
      const body = {
        id: '1'
      }
      const result = await controller(body)
      expect(result.id).toEqual(body.id)
    })
  })
})
