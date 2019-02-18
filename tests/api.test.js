
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('mur blugs', async () => {
  const x = await api.get('/api/blogs')
  await api.post('/api/blogs').send({
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  })
  const y = await api.get('/api/blogs')
  await expect(y.length).toBe(x.length + 1)
})

test('blogs has id', () => {
  const blog = new Blog({

      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
  })
  expect(blog.toJSON().id).toBeDefined()
})

afterAll(() => {
  mongoose.connection.close()
})
