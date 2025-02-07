import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useMenuCartStore = defineStore("menuCart", () => {
  // Estado para el menú
  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  // Estado para el carrito
  const isCartOpen = ref(false);
  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const closeCart = (event) => {
    if (!event.target.closest("#miniCart")) {
      isCartOpen.value = false;
    }
  };

  // Agregar o quitar la clase overflow-hidden al body cuando el carrito esté abierto
  const setBodyOverflow = (value) => {
    document.body.classList.toggle("overflow-hidden", value);
  };

  // Usar watch dentro del store para observar isCartOpen
  watch(isCartOpen, (newValue) => {
    setBodyOverflow(newValue);
  });

  return {
    isMenuOpen,
    toggleMenu,
    isCartOpen,
    toggleCart,
    closeCart,
    setBodyOverflow,
  };
});
