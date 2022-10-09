import { NoteEntry } from './types'

const isString = (string: string | String): boolean => {
  return typeof string === 'string' || string instanceof String
}
const userParse = (userFromReq: any): string => {
  if (isString(userFromReq)) {
    throw new Error('Incorrect or missing user')
  }
  return userFromReq
}

const bodyParse = (bodyFromReq: any): string => {
  if (typeof bodyFromReq !== 'string') {
    throw new Error('Incorrect or missing user')
  }
  return bodyFromReq
}

export const getErrorMessage = (error: unknown): string => {
  let message = 'No error message registered'
  if (error instanceof Error) {
    message = error.message
  }
  return message
}

export const toNewNoteEntry = (object: any): NoteEntry => {
  const user = userParse(object.user)
  const body = bodyParse(object.body)
  const date = new Date()

  const newNote: NoteEntry = [user, date, body]
  return newNote
}
