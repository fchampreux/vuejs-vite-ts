<script setup lang="ts">
//import { ref } from 'vue'

defineProps<{ brand: string }>()

</script>

<template>
  <h1>{{ brand }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
