import { storeToRefs } from 'pinia'
import { useNotesStore } from '@/stores/notes.ts'

export const useDragNDrop = () => {
  const noteStore = useNotesStore();
  const { notes } = storeToRefs(noteStore)

  const startDrag = (event, item) => {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('itemID', item.id);
  }

  const onDrop = (event) => {
    const itemID = event.dataTransfer.getData('itemID')
    const elementIndex = notes.value.findIndex((item) => item.id === Number(itemID));

    if (elementIndex !== -1) {
      notes.value.splice(elementIndex, 1);
    }

  }

  return {
    startDrag,
    onDrop,
  }
};
