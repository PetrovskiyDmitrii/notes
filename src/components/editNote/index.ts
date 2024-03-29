export interface EditNoteProps {
  note: {
    title: string,
    text: string,
  },
}

export interface EditNoteEmits {
  (e: 'close'): void,
}