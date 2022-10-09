import express from 'express'
import * as notesServices from '../services/notes'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(notesServices.getNotes())
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notesServices.getNotesById(id)
  return note != null ? res.send(note) : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('note saved')
})

export default router
