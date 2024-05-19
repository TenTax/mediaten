const ghpages = require('gh-pages')

console.log('Deploy... Please wait.')

ghpages.publish('dist', (err) => {
  if (!err) {
    console.log('Successfully!')
  } else {
    console.error(err)
  }
})
