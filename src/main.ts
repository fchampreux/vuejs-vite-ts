import { createI18n } from 'vue-i18n';
import de from '@/assets/locales/german.json';
import en from '@/assets/locales/english.json';
import fr from '@/assets/locales/french.json';
import uk from '@/assets/locales/ukrainian.json';
import { createApp } from 'vue';
import '@/assets/styles/default.css';
import App from '@/App.vue';
import router from '@/_router/router.ts';

const i18n = createI18n({
    locale: 'fr', // set default locale
    fallbackLocale: 'en', // fallback locale
    messages: { de, en, fr, uk }, // language messages
  });

createApp(App)
.use (i18n)
.use(router)
.mount('#app');
