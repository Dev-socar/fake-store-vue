<script setup>
import { formatearCantidad } from "@/helpers";

defineProps({
  product: Object, 
  loading: Boolean, 
});
</script>

<template>
  
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        
        <div class="md:flex-1 px-4">
          <div
            :class="['h-[460px] rounded-lg mb-4', loading ? 'bg-gray-300 animate-pulse' : '']"
          >
            <img
              v-if="!loading"
              class="w-full h-full object-cover"
              :src="product.image"
              alt="Product Image"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-full px-2">
              <button
                :class="['w-full  text-white py-2 px-4 rounded-full font-bold  transition-colors duration-300', loading ? 'bg-gray-300' : 'bg-purple-500 hover:bg-purple-600']"
                :disabled="loading"
              >
                {{ loading ? '' : 'Add to Cart' }}
              </button>
            </div>
          </div>
        </div>

        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            <span
              v-if="loading"
              class="inline-block h-6 bg-gray-300 rounded w-2/3 animate-pulse"
            ></span>
            <span v-else>{{ product.title }}</span>
          </h2>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">{{ loading ? '' : 'Price: ' }}</span>
              <span v-if="loading" class="inline-block h-4 bg-gray-300 rounded w-20 animate-pulse"></span>
              <span v-else class="text-gray-600">
                {{ formatearCantidad(product.price) }}
              </span>
            </div>
          </div>
          <div>
            <span class="font-bold text-gray-700">{{ loading ? '' : 'Product Description: ' }}</span>
            <p v-if="loading" class="bg-gray-300 h-96 rounded w-full animate-pulse"></p>
        
            <p v-else class="text-gray-600 text-sm mt-2">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

</template>
