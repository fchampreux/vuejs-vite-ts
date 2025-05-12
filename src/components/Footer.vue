<script setup lang="ts">
//import { ref } from 'vue'

defineProps<{ message: string }>()

</script>

<template>
  <h2>{{ message }}</h2>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
