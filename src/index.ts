import express from 'express'
import notesRouter from './routes/notes'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/api/notes', notesRouter)

app.get('/ping', (_req, res) => {
  console.log('pong')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
