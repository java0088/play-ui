<template>
  <div>
    <PlayButton>啦啦啦啦</PlayButton>
  </div>
</template>

<script setup lang="ts">
import { PlayButton } from '@play-ui/components'
console.log(PlayButton.name)
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
