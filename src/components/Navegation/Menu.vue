<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

// Simulación de la cantidad de artículos en el carrito
const cartItemCount = ref(3);

// Importar el icono del carrito y el icono del menú
import cartIcon from "../../assets/cartIcon.svg";
import menuBurgerIcon from "../../assets/menu-burger.svg";

// Estado para controlar la visibilidad del menú
const isMenuOpen = ref(false);

// Función para alternar la visibilidad del menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="p-3 flex flex-col md:flex-row md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <RouterLink to="/">
        <img src="../../assets/logo.svg" class="size-12" alt="Logo Tienda" />
      </RouterLink>
      <button @click="toggleMenu" class="md:hidden">
        <img :src="menuBurgerIcon" alt="Menu Icon" class="size-10" />
      </button>
    </div>

    <div
      :class="[
        'flex-col gap-2 mt-5 md:mt-0 md:flex md:flex-row md:gap-5 transition-all duration-300 ease-in-out transform',
        isMenuOpen ? 'translate-y-0 opacity-100 flex' : 'translate-y-[-20px] opacity-0 hidden',
        'md:flex md:translate-y-0 md:opacity-100 md:flex-row'
      ]"
    >
      <ul class="flex flex-col gap-3 md:flex-row md:gap-5">
        <li>
          <RouterLink active-class="text-purple-600" to="/" class="text-xl"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            active-class="text-purple-600"
            to="/products"
            class="text-xl"
            >Products</RouterLink
          >
        </li>
        <li>
          <RouterLink
            active-class="text-purple-600"
            to="/contact"
            class="text-xl"
            >Contact</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/cart">
            <button class="bg-white text-black rounded-md relative">
              <img :src="cartIcon" alt="Cart Icon" class="size-7" />
              <span
                class="absolute top-[-10px] right-[-7px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
              >
                {{ cartItemCount }}
              </span>
            </button>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
