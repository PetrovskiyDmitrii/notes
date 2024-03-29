import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: 1,
      title: 'First title',
      text: 'First text',
    },
    {
      id: 2,
      title: 'Second title',
      text: 'Second text',
    }
  ]);

  return {
    notes,
  }
})
