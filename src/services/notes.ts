import { Note } from '../types'
import notesData from './notesData.json'

const notes: Note[] = notesData
export const getNotes = (): Note[] => notes

export const addNotes = (): null => null
