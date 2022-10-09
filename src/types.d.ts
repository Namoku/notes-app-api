interface NoteDate {
  created: string
  modified: string
}

interface Note {
  id: number
  user: string[10]
  date: NoteDate
  body: string
  assets: string[]
}
