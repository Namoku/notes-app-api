interface NoteDate {
  created: Date
  modified: Date
}

export interface Note {
  id: number
  user: string[10]
  date: NoteDate
  body: string
}

export type NoteEntry = [user: string[10], createdDate: Date, body: string]
