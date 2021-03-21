const merchantData = require('./merchant.json')

module.exports.getById = (id) => {
  return new Promise((resolve, reject) => {
    const result = merchantData.find((merchant) => {
      return merchant.id === id
    })
    if (result !== undefined) {
      resolve(result)
    }
    reject(new Error('NO_RESULTS_AVAILABLE'))
  })
}
