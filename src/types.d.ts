interface NoteDate {
  created: Date
  modified: Date
}

export interface Note {
  id: number
  user: string[10]
  date: NoteDate
  body: string
  assets?: string[]
}
