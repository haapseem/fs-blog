
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

if (process.env.NODE_ENV === 'test') {
  mongoUrl = process.env.TEST_MONGODB_URI
}

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI
}
