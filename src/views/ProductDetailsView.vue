<script setup>
import { useRoute, useRouter } from "vue-router";

import { useProductsStore } from "@/stores/products";
import { onMounted } from "vue";
import ProductDetails from "@/components/Products/ProductDetails.vue";

const productsStore = useProductsStore();
const route = useRoute();
const router = useRouter();
const { id } = route.params;

onMounted(async () => {
  await productsStore.fetchProductById(id);
});
</script>

<template>
  <div class="bg-gray-50 py-8">
    <ProductDetails
      :product="productsStore.product"
      :loading="productsStore.isLoading"
    />
  </div>
</template>
