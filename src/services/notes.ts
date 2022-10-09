import { Note } from '../types'
import notesData from './notesData.json'

const parseNotes = (): Note[] => {
  const parsedNotes: Note[] = notesData.map((note) => ({
    id: note.id,
    user: note.user,
    date: {
      created: new Date(note.date.created),
      modified: new Date(note.date.modified)
    },
    body: note.body,
    assets: note.assets
  }))

  return parsedNotes
}
const notes: Note[] = parseNotes()

export const getNotes = (): Note[] => notes

export const getNotesById = (id: number): Note | undefined => {
  const entry = notes.find((note) => note.id === id)
  return entry
}

export const addNote = (
  user: string,
  dateCreated: Date,
  body: string
): Note => {
  const newNote: Note = {
    id: Math.max(...notes.map((note) => note.id)) + 1,
    user,
    date: {
      created: dateCreated,
      modified: dateCreated
    },
    body
  }
  notes.push(newNote)
  return newNote
}
