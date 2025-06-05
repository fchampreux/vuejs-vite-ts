<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title?: string;
  content?: string;
  showBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Right Panel',
  content: '',
  showBorder: true
});

const isCollapsed = ref(false);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div class="right-pane" :class="{ 'with-border': showBorder }">
    <div class="pane-header">
      <h2>{{ title }}</h2>
      <button @click="toggleCollapse" class="collapse-btn">
        {{ isCollapsed ? '▼' : '▲' }}
      </button>
    </div>
    <div class="pane-content" v-show="!isCollapsed">
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<style scoped>
.right-pane {
  width: 300px;
  background-color: #ffffff;
  height: 100%;
  padding: 1rem;
  transition: all 0.3s ease;
}

.with-border {
  border-left: 1px solid #e2e8f0;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.05);
}

.pane-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pane-header h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #2d3748;
}

.collapse-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #4a5568;
  transition: color 0.2s ease;
}

.collapse-btn:hover {
  color: #2d3748;
}

.pane-content {
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .right-pane {
    background-color: #1a1a1a;
  }

  .pane-header h2 {
    color: #e2e8f0;
  }

  .collapse-btn {
    color: #a0aec0;
  }

  .collapse-btn:hover {
    color: #e2e8f0;
  }

  .with-border {
    border-left: 1px solid #2d3748;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
  }
}
</style>