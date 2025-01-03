<script setup>
const props = defineProps({
  n: Number,
});
</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
    <div
      v-for="i in props.n"
      :key="i"
      class="border h-96 shadow-sm rounded-md p-4 flex flex-col justify-between animate-pulse"
    >
      <div>
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md h-3/5"></div>
        <div class="h-2/5">
          <div class="h-6 bg-gray-200 rounded-md mt-4"></div>
          <div class="h-4 bg-gray-200 rounded-md mt-2"></div>
          <div class="h-8 bg-gray-200 rounded-md mt-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
