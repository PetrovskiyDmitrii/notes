<template>
  <div :class="$style.note">

    <div :class="$style.title">
      <slot name="title" />
    </div>

    <div :class="$style.text">
      <slot name="text" />
    </div>
    <slot name="edit" />
  </div>
</template>

<script setup lang="ts">
</script>

<style module>
.note {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: calc(100% / 4 - 15px);
  height: 300px;
  background: #ffdf2c;
  padding: 15px;
  color: #000;
}

.title {
  font-weight: bold;
  font-size: 16px;
}

.text {
  height: calc(100% - 88px);
}
</style>