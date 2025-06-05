<script setup lang="ts">
import RightPane from '@/components/RightPane.vue';
import { ref } from 'vue';

const showRightPane = ref(true);

const handleClose = () => {
  showRightPane.value = false;
};

const handleToggle = (collapsed: boolean) => {
  console.log('Pane collapsed:', collapsed);
};
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <RightPane
      title="Documentation"
      theme="light"
      :closeable="true"
      @close="handleClose"
      @toggle="handleToggle"
    >
      <div class="content-wrapper">
        <h3>Getting Started</h3>
        <p>Welcome to our documentation. Here you'll find everything you need to get started with our platform.</p>
        
        <h4>Quick Links</h4>
        <ul>
          <li>Installation Guide</li>
          <li>API Reference</li>
          <li>Best Practices</li>
          <li>Tutorials</li>
        </ul>

        <h4>Recent Updates</h4>
        <p>Check out our latest features and improvements:</p>
        <ul>
          <li>Enhanced performance</li>
          <li>New API endpoints</li>
          <li>Improved documentation</li>
          <li>Bug fixes</li>
        </ul>
      </div>
    </RightPane>
  </div>
</template>

<style scoped>
.home {
  padding: 1rem;
}

.content-wrapper {
  color: #374151;
}

.content-wrapper h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #111827;
}

.content-wrapper h4 {
  font-size: 1.25rem;
  margin: 1.5rem 0 0.75rem;
  color: #111827;
}

.content-wrapper p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.content-wrapper ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.content-wrapper li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>