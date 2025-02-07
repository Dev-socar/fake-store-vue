<script setup>
import { formatearCantidad } from "@/helpers";
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";

defineProps({
  product: Object,
});

const cartStore = useCartStore();
</script>

<template>
  <div
    class="w-full bg-white shadow-md rounded-xl duration-200 hover:scale-105 hover:shadow-xl p-3 "
  >
    <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
      <img
        :src="product.image"
        :alt="'Imagen de ' + product.title"
        loading="lazy"
        class="h-80 w-72 object-cover rounded-t-xl mx-auto my-0"
      />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs sm:text-sm md:text-base">{{
          product.category
        }}</span>
        <p class="text-base sm:text-lg md:text-xl font-bold text-black truncate block capitalize">
          {{ product.title }}
        </p>
        <div class="flex items-center">
          <p class="text-base sm:text-lg md:text-xl font-semibold text-black cursor-auto my-3">
            {{ formatearCantidad(product.price) }}
          </p>
          <del>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 cursor-auto ml-2">
              {{ formatearCantidad(product.price + 59) }}
            </p>
          </del>
        </div>
      </div>
    </RouterLink>
    <div class="flex flex-col md:flex-row gap-3">
      <button
        class="w-full p-3 bg-purple-700 text-white rounded text-center text-xs sm:text-sm md:text-base uppercase hover:bg-purple-600 transition-colors duration-300"
        @click="cartStore.addToCart(product)"
      >
        Add Cart
      </button>
    </div>
  </div>
</template>
