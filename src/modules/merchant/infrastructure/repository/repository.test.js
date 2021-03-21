describe('Merchant :: Repository', () => {
  describe('getById', () => {
    it('should resolve a merchant if exists', async () => {
      const repository = require('./repository')
      const result = await repository.getById('1')
      expect(result.id).toEqual('1')
    })
    it('should reject if id do not exists', async () => {
      const repository = require('./repository')
      try {
        await repository.getById('XXX')
      } catch (error) {
        expect(error.message).toEqual('NO_RESULTS_AVAILABLE')
      }
    })
  })
})
