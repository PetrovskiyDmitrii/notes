<template>
  <div :class="$style.notesWrapper">
    <SingleNote
      v-for="note in notes"
      :key="note.id"
      draggable="true"
      @dragstart="startDrag($event, note)"
    >
      <template #title>
        {{ note.title }}
      </template>
      <template #text>
        {{ note.text }}
      </template>
      <template #edit>
        <button
          :class="[$style.edit, 'btn']"
          @click.prevent="openEditModal(note)"
        >
          Edit
        </button>
      </template>
    </SingleNote>
    <EditNote
      v-if="isEditModalOpen"
      :note="note"
      @close="closeEditModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SingleNote from "@/components/notes/SingleNote.vue"
import EditNote from '@/components/editNote/EditNote.vue';
import { useNotes } from '@/hooks/useNotes';
import { useDragNDrop } from '@/hooks/useDragNDrop';


const {
  notes,
} = useNotes();


const {
  startDrag,
} = useDragNDrop();

const isEditModalOpen = ref(false);
const note = ref();

const openEditModal = (data) => {
  note.value = data;
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  note.value = undefined;
};


</script>

<style module>
.notesWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.edit {}
</style>