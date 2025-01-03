<script setup>
import Header from "@/components/Header/Header.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import SkeletonLoading from "@/components/UI/SkeletonLoading.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";

const productsMain = useProductsStore();

onMounted(async () => {
  await productsMain.fetchMainProducts();
});
</script>

<template>
  <main class="pt-10">
    <Header />
    <SkeletonLoading v-if="productsMain.isLoading" :n="4"  />
    <div v-else class="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-24 mt-10 mb-5">
      <ProductCard
        v-for="product in productsMain.mainProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>
