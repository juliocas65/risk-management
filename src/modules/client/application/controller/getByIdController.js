'use strict'

const { getById } = require('./../service/service')

const process = async (body) => {
  const { id } = body
  const response = await getById(id)
  return response
}

module.exports = process
