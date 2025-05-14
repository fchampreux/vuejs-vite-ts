<script setup lang="ts">
  import { ref } from "vue";
  defineProps<{ msg: string }>();
</script>

<template>
  <h1>Right Pane - {{ msg }}</h1>
</template>

<style scoped>

</style>
