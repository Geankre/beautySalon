const app = require('./src/app')

const { PORT } = process.env || 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
})