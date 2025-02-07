<script setup>
import PaypalButton from "@/components/Paypal/PaypalButton.vue";
import { formatearCantidad } from "@/helpers";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <main class="pt-20 flex-grow">
    <section class="p-2 mt-5 mx-auto rounded shadow">
      <h2 class="text-lg sm:text-xl md:text-2xl text-center text-gray-500 font-semibold">
        Check Out
      </h2>
      <div class="flex flex-col lg:flex-row gap-5 justify-between p-2">
        
        <!-- Tabla de productos -->
        <div class="overflow-x-auto lg:w-3/4">
          <table class="w-full text-sm sm:text-base text-left text-gray-500 mt-5">
            <tbody>
              <tr
                v-for="product in cartStore.cart"
                :key="product.id"
                class="bg-white border-b border-gray-200"
              >
                <th class="px-6 py-4 font-medium text-gray-900  text-sm sm:text-base md:text-lg">
                  {{ product.title }}
                </th>
                <td class="px-6 py-4 text-sm sm:text-base md:text-lg whitespace-nowrap">
                  {{ product.quantity }} items
                </td>
                <td class="px-6 py-4 text-sm sm:text-base md:text-lg whitespace-nowrap">
                  {{ formatearCantidad(product.subtotal) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Resumen del pedido -->
        <div class="lg:mt-4 lg:w-1/4 flex flex-col lg:gap-5 lg:justify-center">
          <div class="space-y-1">
            <h3 class="text-base sm:text-lg md:text-xl font-semibold">
              Total: <span>{{ formatearCantidad(cartStore.totalPrice) }}</span>
            </h3>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold">
              Discount: <span>{{ formatearCantidad(0) }}</span>
            </h3>
            <h3 class="text-base sm:text-lg md:text-xl font-semibold">
              Total Items: {{ cartStore.totalItems }} items
            </h3>
          </div>

          <!-- Botón de pago -->
          <div class="mt-4 sm:mt-6">
            <PaypalButton />
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

