'use strict'

const repository = require('./../../infrastructure/repository/repository')

module.exports.getById = async (id) => {
  if (!id) {
    return new Error('INVALID_PARAMETER')
  }
  return await repository.getById(id)
}
