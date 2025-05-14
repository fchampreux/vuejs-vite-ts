<script setup lang="ts">
  import { ref } from "vue";
  defineProps<{ msg: string }>();
</script>

<template>
  <h1>Search - {{ msg }}</h1>
</template>

<style scoped>

</style>
