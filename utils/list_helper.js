const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((x, y) => x + y.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.sort((x,y) => y.likes - x.likes)[0]
}

const mostBlogs = (blogs) => {
  let arra = [];
  blogs.forEach(x => {
    if(arra.find(y => y.author == x.author)){
      arra.find(y => y.author == x.author).blogs += 1;
    }else{
      arra.push({
        author: x.author,
        blogs: 1
      })
    }
  })
  return arra.sort((x,y) => y.blogs - x.blogs)[0]
}

const mostLikes = (blogs) => {
  let arra = [];
  blogs.forEach(x => {
    if(arra.find(y => y.author == x.author)){
      arra.find(y => y.author == x.author).likes += x.likes;
    }else{
      arra.push({
        author: x.author,
        likes: x.likes
      })
    }
  })
  return arra.sort((x,y) => y.likes - x.likes)[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
