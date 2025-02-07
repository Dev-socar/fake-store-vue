<script setup>
import { RouterLink } from "vue-router";
import cartIcon from "../../assets/cartIcon.svg";
import menuBurgerIcon from "../../assets/menu-burger.svg";
import { useCartStore } from "@/stores/cart";
import { useMenuCartStore } from "@/stores/menu";
import { formatearCantidad } from "@/helpers";

const cartStore = useCartStore();
const menuCartStore = useMenuCartStore();
</script>

<template>
  <div
    class="fixed inset-0  transition-all duration-500 ease-in-out"
    :class="{'opacity-100 visible': menuCartStore.isCartOpen, 'opacity-0 invisible': !menuCartStore.isCartOpen}"
    @click="menuCartStore.closeCart"
  ></div>

  <aside id="miniCart" class="fixed right-0 top-0 w-full md:w-[50%] lg:w-[30%] h-screen bg-white shadow-lg p-4 z-50 flex flex-col transition-all duration-500 transform" :class="{'translate-x-0 opacity-100': menuCartStore.isCartOpen, 'translate-x-full opacity-0': !menuCartStore.isCartOpen}">
    <button class="absolute top-4 right-4 text-gray-600 text-lg sm:text-xl" @click="menuCartStore.toggleCart">✕</button>

    <p v-if="cartStore.cart.length === 0" class="text-gray-500 text-center mt-10 text-sm sm:text-base md:text-lg">Empty Cart</p>

    <div v-else class="flex-1 overflow-y-auto mt-10 pr-2">
      <div v-for="product in cartStore.cart" :key="product.id" class="flex items-center justify-between border-b pb-2 mb-2">
        <img :src="product.image" class="rounded-md size-20" />
        <div class="ml-2 flex-1 flex flex-col gap-2">
          <p class="text-xs sm:text-sm md:text-base font-semibold text-wrap w-1/2">{{ product.title }}</p>
          <p class="text-xs sm:text-sm md:text-base text-gray-500 font-semibold">Quantity: {{ product.quantity }} items</p>
        </div>
        <p class="text-xs sm:text-sm md:text-base font-semibold">{{ formatearCantidad(product.subtotal) }}</p>
      </div>
    </div>

    <div v-if="cartStore.cart.length !== 0" class="border-t pt-4">
      <p class="font-bold flex justify-between items-center text-sm sm:text-base md:text-lg">Total: <span>{{ formatearCantidad(cartStore.totalPrice) }}</span></p>
      <RouterLink @click="menuCartStore.toggleCart" to="/cart" class="block text-center bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 mt-3 text-sm sm:text-base md:text-lg">My Cart</RouterLink>

      <RouterLink @click="menuCartStore.toggleCart" to="/resume" class="block w-full text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mt-3 text-sm sm:text-base md:text-lg">Pay Now</RouterLink>
      <button @click="cartStore.dropCart" class="block w-full text-center bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 mt-3 text-sm sm:text-base md:text-lg">Drop Cart</button>
    </div>
  </aside>
</template>
