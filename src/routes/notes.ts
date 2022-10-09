import express from 'express'
import * as notesServices from '../services/notes'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(notesServices.getNotes())
})

router.post('/', (_req, res) => {
  res.send('note saved')
})

export default router
