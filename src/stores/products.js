import APIService from "@/services/APIService";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const mainProducts = ref([]);
  const allProducts = ref([]);
  const isLoading = ref(false);
  const product = ref([]);
  const categorySelected = ref("all");

  async function fetchMainProducts() {
    isLoading.value = true;
    try {
      const data = await APIService.getMainProducts();
      mainProducts.value = data;
    } catch (error) {
      console.error("Error fetching main products:", error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchAllProducts() {
    isLoading.value = true;
    try {
      const { data } = await APIService.getAllProducts();
      allProducts.value = data;
    } catch (error) {
      console.error("Error fetching all products:", error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchProductsByCategory(category) {
    isLoading.value = true;
    categorySelected.value = category;
    try {
      if (category === "all") {
        await fetchAllProducts();
      } else {
        const { data } = await APIService.getProductsCategory(category);
        allProducts.value = data;
      }
    } catch (error) {
      console.error(`Error fetching category ${category}:`, error);
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchProductById(id) {
    isLoading.value = true;
    try {
      const { data } = await APIService.getProduct(id);
      product.value = data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    mainProducts,
    allProducts,
    categorySelected,
    isLoading,
    product,
    fetchAllProducts,
    fetchMainProducts,
    fetchProductsByCategory,
    fetchProductById,
  };
});
