<template>
  <button><slot></slot></button>
</template>

<script lang="ts" setup>
import { buttonTypes } from './button'
defineOptions({
  name: 'PlayButton'
})
</script>
