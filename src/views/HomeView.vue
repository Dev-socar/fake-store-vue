<script setup>
import Header from "@/components/Header/Header.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
import SkeletonLoading from "@/components/UI/SkeletonLoading.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css"; // Estilos globales de Swiper

const productsMain = useProductsStore();

onMounted(async () => {
  await productsMain.fetchMainProducts();
});
</script>

<template>
  <main class="pt-20 flex-grow">
    <Header />
    <SkeletonLoading v-if="productsMain.isLoading" :n="4" />
    <div v-else class="w-full mx-auto mt-10 mb-5 ">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 mb-10 text-center lg:text-left">Latest products</h2>
      <Swiper 
        class="mySwiper"
        :slidesPerView="1"
        spaceBetween="20"
        :loop="productsMain.mainProducts.length > 2"
        
        :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: productsMain.mainProducts.length > 2,
          },
        }"
      >
        <SwiperSlide
          v-for="product in productsMain.mainProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  </main>
</template>
