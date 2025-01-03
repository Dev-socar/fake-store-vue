<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: String,
  text: String,
  classText: String,
});
</script>

<template>
  <RouterLink
    :to="{ name: to }"
    :class="['block py-4 px-5 text-lg font-semibold rounded-md md:w-3/4 transition-colors duration-300', classText]"
  >
    {{ text }}
  </RouterLink>
</template>
