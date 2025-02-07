<script>
import { RouterLink } from 'vue-router';


</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
    <h1 class="text-6xl font-bold text-purple-600">404</h1>
    <p class="text-xl text-gray-700 mt-2">Página no encontrada</p>
    <RouterLink to="/" class="mt-4 px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700">
      Volver al inicio
    </RouterLink>
  </div>
</template>
