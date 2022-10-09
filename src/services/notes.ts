import { Note } from '../types'
import notesData from './notesData.json'

const notes: Note[] = notesData
export const getNotes = (): Note[] => notes

export const getNotesById = (id: number): Note | undefined => {
  const entry = notes.find((note) => note.id === id)
  return entry
}

export const addNotes = (): null => null
