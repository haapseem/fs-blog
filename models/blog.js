
const mongoose = require('mongoose')
const config = require('../utils/config')

mongoose.set('useFindAndModify', true)

const url = config.MONGODB_URI
mongoose.connect(url, { useNewUrlParser: true })
	.then(console.log('connected to MongoDB'))
	.catch((e) => console.log('error connection to MongoDB:', e.message))

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

module.exports = mongoose.model('Blog', blogSchema)
