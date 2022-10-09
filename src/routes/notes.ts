import express from 'express'
import * as notesServices from '../services/notes'
import { getErrorMessage, toNewNoteEntry } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(notesServices.getNotes())
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notesServices.getNotesById(id)
  return note != null ? res.send(note) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const { body: bodyReq } = req
    const [user, date, body] = toNewNoteEntry(bodyReq)
    const addedNote = notesServices.addNote(user, date, body)
    res.send(addedNote)
  } catch (error) {
    res.sendStatus(400).send(getErrorMessage(error))
  }
})

export default router
