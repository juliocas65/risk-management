const clientData = require('./client.json')

module.exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    const result = clientData.find((client) => {
      return client.id === id
    })
    if (result !== undefined) {
      resolve(result)
    }
    reject(new Error('NO_RESULTS_AVAILABLE'))
  })
}
