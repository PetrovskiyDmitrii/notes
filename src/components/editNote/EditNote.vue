<template>
  <div :class="$style.modal">
    <div :class="$style.modalWrapper">
      <div :class="$style.close" @click="emit('close')">X</div>
      <div
        :class="$style.editNote"
      >
        <input v-model="model.title" type="text">
        <textarea
          v-model="model.text"
          cols="30"
          rows="10"
        >
        </textarea>
        <button
          :class="[$style.save, 'btn']"
          @click.prevent="patchNote"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditNote } from '@/hooks/useEditNote';
import { EditNoteProps, EditNoteEmits } from './index.ts';

const props = defineProps<EditNoteProps>();
const emit = defineEmits<EditNoteEmits>();

const {
  model,
  patchNote,
} = useEditNote(props, emit);

</script>

<style module>

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, .5);
}

.modalWrapper {
  margin: auto;
  padding: 10px 20px 20px 20px;
  background: #ffdf2c;
}

.close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  color: #000;
  margin: 0 0 15px auto;
  cursor: pointer;
}

.editNote {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  color: #000;
}

.save {}

</style>