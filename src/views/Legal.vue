<script setup lang="ts">
import RightPane from '@/components/RightPane.vue';
import { ref } from 'vue';

const showRightPane = ref(true);

const handleClose = () => {
  showRightPane.value = false;
};
</script>

<template>
  <div class="legal"> 
    <h1>Legal</h1>
    <RightPane 
      title="Legal Information"
      theme="light"
      :closeable="true"
      @close="handleClose"
      v-if="showRightPane">
      <div class="content-wrapper">
        <h3>Terms of Service</h3>
        <p>Please read these terms carefully before using our services.</p>
        
        <h3>Privacy Policy</h3>
        <p>We take your privacy seriously and are committed to protecting your personal information.</p>
        
        <h3>Cookie Policy</h3>
        <p>This website uses cookies to enhance your browsing experience.</p>
        
        <h3>Disclaimer</h3>
        <p>The information provided on this website is for general informational purposes only.</p>
      </div>
    </RightPane>
  </div>
</template>

<style scoped>
.legal {
  padding: 2rem;
}

.content-wrapper {
  padding: 1rem;
}

h3 {
  color: #374151;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>