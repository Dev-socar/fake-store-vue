<script setup>
import { onMounted } from "vue";
import { useCartStore } from "@/stores/cart";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
const paypalCurrency = import.meta.env.VITE_PAYPAL_CURRENCY || "USD";

const router = useRouter();

const loadPaypalScript = () => {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve(window.paypal);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=${paypalCurrency}`;
    script.async = true;
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error("Error al cargar PayPal SDK"));
    document.body.appendChild(script);
  });
};

onMounted(async () => {
  try {
    const paypal = await loadPaypalScript();

    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: cartStore.totalPrice.toFixed(2),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Pago exitoso:", order);

          Swal.fire({
            title: "Successful payment",
            icon: "success",
          });

          setTimeout(() => {
            cartStore.dropCart();
            router.push({ name: "cart" });
          }, 3000);
        },
        onError: (err) => {
          console.error("Error en el pago:", err);
          Swal.fire({ icon: "error", text: "Something went wrong!" });
        },
      })
      .render("#paypal-button-container");
  } catch (error) {
    console.error("Error al cargar PayPal:", error);
  }
});
</script>

<template>
  <div id="paypal-button-container"></div>
</template>
