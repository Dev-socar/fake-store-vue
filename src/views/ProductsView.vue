<script setup>
import ProductCard from "@/components/Products/ProductCard.vue";
import Heading from "@/components/UI/Heading.vue";
import { useProductsStore } from "@/stores/products";
import SkeletonLoading from "@/components/UI/SkeletonLoading.vue";
import { onMounted } from "vue";

const productsStore = useProductsStore();

const categories = [
  "all",
  "jewelery",
  "electronics",
  "men's clothing",
  "women's clothing",
];

onMounted(async () => {
  await productsStore.fetchProductsByCategory(productsStore.categorySelected);
});

const selectCategory = async (category) => {
  await productsStore.fetchProductsByCategory(category);
};
</script>

<template>
  <main class="pt-10">
    <Heading text="Products" />
    <div class="flex flex-wrap gap-4 justify-center mt-5">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory(category)"
        class="px-4 py-2 rounded-md text-white font-semibold capitalize"
        :class="{
          'bg-purple-600': productsStore.categorySelected === category,
          'bg-gray-400': productsStore.categorySelected !== category,
        }"
      >
        {{ category }}
      </button>
    </div>
    <SkeletonLoading v-if="productsStore.isLoading" :n="6" />
    <div
      v-else
      class="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-24 mt-10 mb-5"
    >
      <ProductCard
        v-for="product in productsStore.allProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>
