'use strict'

const express = require('express')

const getByIdController = require('./../../application/controller/getByIdController')

const api = express.Router()

api.get('/:id', async (req, res) => {
  const { id } = req.params
  let response
  try {
    response = await getByIdController({ id })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
  res.status(200).send(response)
})

module.exports = api
