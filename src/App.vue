<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { reactive } from 'vue';

const languageArray = reactive(['en', 'de']);
</script>

<template>
  <Nav></Nav>
    <navbar>
    <div class="lang-dropdown">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in languageArray" :key="`lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
  </navbar>
  <main>
    <h1>{{ $t('message.welcome') }}</h1>
  </main>

  <Header brand="Welcome home" />
  <RouterView></RouterView>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="./assets/images/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/images/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <br>
    <RouterLink to="/">Home page</RouterLink> | 
    <RouterLink to="/legal">Legal page</RouterLink>
  </br>
  <HelloWorld msg="Vite + Vue" />
  <Footer message="Good bye !" />
</template>

<style scoped>
navbar {
  float: right;
}

main {
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
