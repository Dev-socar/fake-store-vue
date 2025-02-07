<script setup>
import { RouterLink } from "vue-router";
import cartIcon from "../../assets/cartIcon.svg";
import menuBurgerIcon from "../../assets/menu-burger.svg";
import { useCartStore } from "@/stores/cart";
import { useMenuCartStore } from "@/stores/menu";
import CartAside from "@/components/Navegation/CartAside.vue";

const cartStore = useCartStore();
const menuCartStore = useMenuCartStore();
</script>

<template>
  <nav
    class="fixed  z-30 bg-white left-[5%] right-[5%]  md:left-[15%] md:right-[15%] p-3 flex flex-col md:flex-row md:justify-between md:items-center"
  >
    <div class="flex justify-between items-center">
      <RouterLink to="/">
        <img src="../../assets/logo.svg" class="size-12" alt="Logo Tienda" />
      </RouterLink>
      <button @click="menuCartStore.toggleMenu" class="md:hidden">
        <img :src="menuBurgerIcon" alt="Menu Icon" class="size-10" />
      </button>
    </div>

    <div
      :class="[
        'flex-col gap-2 mt-5 md:mt-0 md:flex md:flex-row md:gap-5 transition-all duration-300 ease-in-out transform',
        menuCartStore.isMenuOpen
          ? 'translate-y-0 opacity-100 flex'
          : 'translate-y-[-20px] opacity-0 hidden',
        'md:flex md:translate-y-0 md:opacity-100 md:flex-row',
      ]"
    >
      <ul class="flex flex-col gap-3 md:flex-row md:gap-5">
        <li class="cursor-pointer"> 
          <RouterLink
            active-class="text-purple-600"
            to="/"
            class="text-sm sm:text-base md:text-lg lg:text-xl "
            >Home</RouterLink
          >
        </li>
        <li class="cursor-pointer"> 
          <RouterLink
            active-class="text-purple-600"
            to="/products"
            class="text-sm sm:text-base md:text-lg lg:text-xl "
            >Products</RouterLink
          >
        </li>
        <li class="relative">
          <button
            @click="menuCartStore.toggleCart"
            class="bg-white text-black rounded-md relative"
          >
            <img :src="cartIcon" alt="Cart Icon" class="size-7" />
            <span
              class="absolute top-[-10px] right-[-7px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  
  <CartAside />
</template>
