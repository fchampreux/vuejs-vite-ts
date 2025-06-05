<template>
    <main>
        <div class="home"> 
            <h1>{{ t("nav.home") }}</h1>
            <h1>Welcome to the Vue 3 I18n tutorial!</h1>
            <p>This tutorial was brought to you by Lokalise.</p>
            <p>This page has been visited 30 times.</p>
        </div>
    </main>
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