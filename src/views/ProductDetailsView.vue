<script setup>
import { useRoute, useRouter } from "vue-router";

import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";
import ProductDetails from "@/components/Products/ProductDetails.vue";

const productsStore = useProductsStore();
const route = useRoute();
const { id } = route.params;

onMounted(async () => {
  await productsStore.fetchProductById(id);
});
</script>

<template>
  <div class="bg-gray-100 mt-20 p-4 flex-grow">
    <ProductDetails
      :product="productsStore.product"
      :loading="productsStore.isLoading"
    />
  </div>
</template>
