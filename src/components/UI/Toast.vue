<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const toasts = computed(() => cartStore.toasts);
</script>

<template>
  <div class="fixed top-5 right-5 z-50 flex flex-col gap-2">
    <transition-group name="fade">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="p-3 text-white rounded-lg shadow-md"
        :class="{
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-yellow-500': toast.type === 'warning',
        }"
      >
        <p class="text-lg">{{ toast.message }}</p>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
