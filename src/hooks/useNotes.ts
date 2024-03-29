import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes.ts'

export const useNotes = () => {
  const noteStore = useNotesStore();
  const { notes } = storeToRefs(noteStore)

  return {
    notes,
  };
}