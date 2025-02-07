import baseURL from "@/lib/axios";

export default {
  async getMainProducts() {
    const urls = [
      "/products/category/jewelery?limit=2",
      "/products/category/electronics?limit=2",
      "/products/category/men's clothing?limit=2",
      "/products/category/women's clothing?limit=2",
    ];

    try {
      const responses = await Promise.all(urls.map((url) => baseURL.get(url)));
      return responses.flatMap((response) => response.data);
    } catch (error) {
      console.error("Error fetching main products:", error);
      return [];
    }
  },

  async getAllProducts() {
    try {
      const response = await baseURL.get("/products");
      return response;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },
  async getProductsCategory(category) {
    try {
      const response = await baseURL.get(`/products/category/${category}`);
      return response;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  },

  async getProduct(id) {
    try {
      const response = await baseURL.get(`/products/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching all product:", error);
      throw error;
    }
  },
};
