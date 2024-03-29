<template>
  <div
    :class="$style.createNote"
  >
    <input
      v-model="model.title"
      type="text"
      placeholder="Title"
    >
    <textarea
      v-model="model.text"
      cols="30"
      rows="10"
      placeholder="Text"
    >
    </textarea>
    <button
      class="btn"
      @click.prevent="createNote"
    >Create</button>
  </div>
</template>

<script setup lang="ts">
import { useCreateNote } from '@/hooks/useCreateNote';

const {
  model,
  createNote
} = useCreateNote();


</script>

<style module>
.createNote {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: calc(100% / 2 - 15px);
  color: #000;
  border: 0;
  background: #ffad16;
  padding: 15px;
}

input {
  height: 40px;
}

input, textarea {
  border: none;
  padding: 5px 15px;
}

</style>