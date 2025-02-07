<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="bg-purple-600 text-white py-10 px-5 mt-10">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
    >
      <!-- Columna 1: Título y descripción -->
      <div>
        <h2 class="text-2xl font-bold">Fake Store Vue</h2>
        <p class="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          feugiat augue, nec fringilla turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
          turpis.
        </p>
      </div>

      <!-- Columna 2: Enlaces -->
      <div>
        <h3 class="text-xl font-semibold mb-3">Menu</h3>
        <ul class="space-y-2 flex flex-col gap-1">
          <RouterLink class="hover:text-gray-300 w-min" active-class="font-semibold" :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink class="hover:text-gray-300 w-min" active-class="font-semibold" :to="{ name: 'products' }">Products</RouterLink>
          <RouterLink class="hover:text-gray-300 w-min" active-class="font-semibold" :to="{ name: 'cart' }">Cart</RouterLink>
          
        </ul>
      </div>

      <!-- Columna 3: Redes sociales y contacto -->
      <div>
        <h3 class="text-xl font-semibold mb-3">Contact</h3>
        <p><strong>Location:</strong> Mérida, Yucatán</p>
        <p><strong>Phone:</strong> +52 999 123 4567</p>
        <div class="flex justify-center md:justify-start gap-4 mt-3">
          <a href="#" class="text-white hover:text-gray-300 text-2xl">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 text-2xl">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 text-2xl">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
