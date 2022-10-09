import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('here will be here the notes')
})

router.post('/', (_req, res) => {
  res.send('note saved')
})

export default router
