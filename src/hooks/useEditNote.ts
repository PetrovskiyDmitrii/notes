import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useNotesStore } from '@/stores/notes.ts';

export const useEditNote = (
  props?: EditNoteProps,
  emit?: EditNoteEmits,
) => {
  const noteStore = useNotesStore();
  const { notes } = storeToRefs(noteStore)

  const model = ref({
    title: '',
    text: '',
  });

  const patchNote = () => {
    const noteIndex = notes.value.findIndex(item => item.id === model.value.id);

    if (noteIndex !== -1) {
      const updatedNote = { ...notes.value[noteIndex], title: model.value.title, text: model.value.text };
      notes.value.splice(noteIndex, 1, updatedNote);
      emit('close');
    } else {
      alert('Заметка не найдена')
    }
  }

  onMounted(() => {
    if (props?.note) {
      model.value = {...props.note};
    }
  });

  return {
    model,
    notes,
    patchNote,
  };
}