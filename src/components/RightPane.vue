<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  title?: string;
  content?: string;
  showBorder?: boolean;
  width?: string;
  theme?: 'light' | 'dark' | 'auto';
  closeable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Right Panel',
  content: '',
  showBorder: true,
  width: '300px',
  theme: 'auto',
  closeable: false
});

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'toggle', value: boolean): void;
}>();

const isCollapsed = ref(false);
const isVisible = ref(true);

const themeClass = computed(() => {
  if (props.theme === 'auto') return '';
  return props.theme === 'dark' ? 'theme-dark' : 'theme-light';
});

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  emit('toggle', isCollapsed.value);
};

const close = () => {
  isVisible.value = false;
  emit('close');
};
</script>

<template>
  <Transition name="slide">
    <div v-if="isVisible" 
         class="right-pane" 
         :class="[{ 'with-border': showBorder }, themeClass]"
         :style="{ width }">
      <div class="pane-header">
        <h2>{{ title }}</h2>
        <div class="pane-controls">
          <button @click="toggleCollapse" class="control-btn" :title="isCollapsed ? 'Expand' : 'Collapse'">
            {{ isCollapsed ? '▼' : '▲' }}
          </button>
          <button v-if="closeable" @click="close" class="control-btn close-btn" title="Close">
            ✕
          </button>
        </div>
      </div>
      <Transition name="fade">
        <div class="pane-content" v-show="!isCollapsed">
          <slot>
            {{ content }}
          </slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.right-pane {
  background-color: #ffffff;
  height: 100%;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
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
  font-weight: 600;
}

.pane-controls {
  display: flex;
  gap: 0.5rem;
}

.control-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #4a5568;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.control-btn:hover {
  background-color: #f7fafc;
  color: #2d3748;
}

.close-btn:hover {
  background-color: #fed7d7;
  color: #c53030;
}

.pane-content {
  transition: all 0.3s ease;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Theme variations */
.theme-light {
  background-color: #ffffff;
}

.theme-dark {
  background-color: #1a1a1a;
}

.theme-dark .pane-header h2 {
  color: #e2e8f0;
}

.theme-dark .control-btn {
  color: #a0aec0;
}

.theme-dark .control-btn:hover {
  background-color: #2d3748;
  color: #e2e8f0;
}

.theme-dark .close-btn:hover {
  background-color: #742a2a;
  color: #feb2b2;
}

.theme-dark.with-border {
  border-left: 1px solid #2d3748;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
}

/* Auto theme (system preference) */
@media (prefers-color-scheme: dark) {
  .right-pane {
    background-color: #1a1a1a;
  }

  .pane-header h2 {
    color: #e2e8f0;
  }

  .control-btn {
    color: #a0aec0;
  }

  .control-btn:hover {
    background-color: #2d3748;
    color: #e2e8f0;
  }

  .close-btn:hover {
    background-color: #742a2a;
    color: #feb2b2;
  }

  .with-border {
    border-left: 1px solid #2d3748;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
  }
}
</style>