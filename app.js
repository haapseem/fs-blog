
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')

const blogsRouter = require('./routes')
const usersRouter = require('./routers/user')

app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use(cors())


// const PORT = config.PORT
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })

module.exports = app
