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
  width: '380px',
  theme: 'light',
  closeable: true
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
            <div class="content-wrapper">
              {{ content }}
            </div>
          </slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.right-pane {
  background-color: #ffffff;
  height: 100vh;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  overflow-y: auto;
}

.with-border {
  border-left: 1px solid #e5e7eb;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.05);
}

.pane-header {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
}

.pane-header h2 {
  margin: 0;
  font-size: 1.125rem;
  color: #111827;
  font-weight: 600;
  line-height: 1.5;
}

.pane-controls {
  display: flex;
  gap: 0.75rem;
}

.control-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #6b7280;
  transition: all 0.2s ease;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.control-btn:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.close-btn:hover {
  background-color: #fee2e2;
  color: #b91c1c;
}

.pane-content {
  transition: all 0.3s ease;
}

.content-wrapper {
  padding: 1.25rem;
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
.theme-dark {
  background-color: #1f2937;
}

.theme-dark .pane-header {
  background-color: #1f2937;
  border-bottom-color: #374151;
}

.theme-dark .pane-header h2 {
  color: #f3f4f6;
}

.theme-dark .control-btn {
  color: #9ca3af;
}

.theme-dark .control-btn:hover {
  background-color: #374151;
  color: #f3f4f6;
}

.theme-dark .close-btn:hover {
  background-color: #7f1d1d;
  color: #fecaca;
}

.theme-dark.with-border {
  border-left-color: #374151;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.3);
}

/* Scrollbar styling */
.right-pane::-webkit-scrollbar {
  width: 6px;
}

.right-pane::-webkit-scrollbar-track {
  background: transparent;
}

.right-pane::-webkit-scrollbar-thumb {
  background-color: #e5e7eb;
  border-radius: 3px;
}

.theme-dark .right-pane::-webkit-scrollbar-thumb {
  background-color: #4b5563;
}
</style>