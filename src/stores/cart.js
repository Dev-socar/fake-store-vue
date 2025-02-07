import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import Swal from "sweetalert2";

export const useCartStore = defineStore("cart", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);
  const toasts = ref([]);

  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true }
  );

  const addToast = (message, type = "success") => {
    const id = Date.now();
    toasts.value.push({ id, message, type });

    setTimeout(() => {
      toasts.value = toasts.value.filter((toast) => toast.id !== id);
    }, 3000);
  };

  const addToCart = (producto) => {
    const item = cart.value.find((item) => item.id === producto.id);
    if (item) {
      item.quantity++;
      item.subtotal = item.quantity * item.price;
    } else {
      cart.value.push({ ...producto, quantity: 1, subtotal: producto.price });
    }

    addToast("Product added to cart", "success");
  };

  const incrementQuantity = (productId) => {
    const item = cart.value.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
      item.subtotal = item.quantity * item.price;
    }
  };

  const decrementQuantity = (productId) => {
    const item = cart.value.find((item) => item.id === productId);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
        item.subtotal = item.quantity * item.price;
      } else {
        removeFromCart(productId);
      }
    }
  };

  const removeFromCart = (productoId) => {
    cart.value = cart.value.filter((item) => item.id !== productoId);
    addToast("Product removed from cart", "error");
  };

  const dropCart = () => {
     Swal.fire({
       title: "¿Are you sure?",
       text: "All products will be removed.",
       icon: "warning",
       showCancelButton: true,
       confirmButtonText: "Yes, empty",
       cancelButtonText: "Cancel",
     }).then((result) => {
       if (result.isConfirmed) {
         cart.value = [];
         Swal.fire("Deleted!", "The cart has been emptied.", "success");
       }
     });
  };

  const totalItems = computed(() =>
    cart.value.reduce((suma, item) => suma + item.quantity, 0)
  );

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  return {
    cart,
    totalItems,
    totalPrice,
    toasts,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    dropCart
  };
});
