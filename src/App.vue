<template>
  <div :class="$style.wrapper">
    <div :class="$style.left">
      <CreateNotes />
      <Notes />
    </div>
    <div :class="$style.right">
        <h2>Trash</h2>
        <div
          :class="$style.trash"
          @drop="onDrop($event)"
          @dragenter.prevent
          @dragover.prevent
        ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateNotes from '@/components/createNotes/CreateNotes.vue'
import Notes from '@/components/notes/Notes.vue';
import { useDragNDrop } from '@/hooks/useDragNDrop';

const {
  onDrop,
} = useDragNDrop();
</script>

<style module>
.wrapper {
  display: flex;
  width: 1410px;
  gap: 15px;
}

.left {
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(75% - 15px);
  gap: 30px;
}

.right {
  flex: 0 0 25%;
  position: relative;
}

.trash {
  position: sticky;
  top: 36px;
  border: 1px solid red;
  width: 100%;
  height: 450px;
}
</style>
