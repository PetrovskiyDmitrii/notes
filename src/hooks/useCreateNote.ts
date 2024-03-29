import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes.ts'

export const useCreateNote = () => {
  const noteStore = useNotesStore();
  const { notes } = storeToRefs(noteStore)

  const model = ref({
    title: '',
    text: '',
  });

  const createNote = () => {
    notes.value.unshift({
        id: Date.now(),
        title: model.value.title,
        text: model.value.text,
    });

    model.value.title = '';
    model.value.text = '';
  }

  return {
    model,
    notes,
    createNote,
  };
}