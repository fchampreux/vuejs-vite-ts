<template>
    <div class="about"> 
        <h1> Home </h1>
    </div>
</template>

<script>
  // Add this script:
  import { useI18n } from 'vue-i18n'
  export default {
    setup() {
      const { t } = useI18n()
      return { t }
    }
  }
</script>