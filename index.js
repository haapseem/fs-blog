
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')

const blogsRouter = require('./routes')

app.use('/api/blogs', blogsRouter)
app.use(cors())
app.use(bodyParser.json())


const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
