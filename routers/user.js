const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body
    console.log(body)
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    if (body.username.length < 3 || body.password.length < 3) {
      return response.status(400).json({ error: 'content missing' })
    }

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.get('/', (request, response, next) => {
    User
      .find({})
      .then(users => {
        response.json(users)
      })
})

module.exports = usersRouter
