<script setup>
import PaypalButton from "@/components/Paypal/PaypalButton.vue";
import Heading from "@/components/UI/Heading.vue";
import { formatearCantidad } from "@/helpers";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <main class="pt-20 flex-grow">
    <section class="p-2 mt-5 w-full rounded">
      <div v-if="cartStore.totalItems === 0">
        <h2 class="text-2xl text-center text-gray-500 uppercase font-semibold">
          Empty Cart
        </h2>
      </div>
      <div v-else>
        <div
          class="flex flex-col gap-2 md:flex-row md:justify-between md:items-center"
        >
          <Heading text="My Cart" />
          <div class="flex gap-5 items-center">
            <button
              @click="cartStore.dropCart"
              class="px-3 py-2 rounded bg-gray-300 font-semibold cursor-pointer"
            >
              Empty Cart
            </button>
            <RouterLink
              to="/resume"
              class="px-3 py-2 rounded bg-purple-500 font-semibold cursor-pointer text-white"
              >Payment</RouterLink
            >
          </div>
        </div>

        <div class="overflow-x-auto w-full mt-10">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" class="px-6 py-3 rounded-s-lg">Product name</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3 text-center">Qty</th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap text-center">
                  Unitary Price
                </th>
                <th scope="col" class="px-6 py-3 rounded-e-lg text-center">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="product in cartStore.cart"
                :key="product.id"
                class="bg-white"
              >
                <th
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap lg:text-wrap"
                >
                  {{ product.title }}
                  <button
                    @click="cartStore.removeFromCart(product.id)"
                    class="ml-2 rounded-full bg-red-500 size-5"
                  >
                    <i class="fa-solid fa-xmark text-white"></i>
                  </button>
                </th>
                <th
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {{ product.category }}
                </th>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3 justify-evenly">
                    <button
                      @click="cartStore.decrementQuantity(product.id)"
                      class="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{{ product.quantity }}</span>
                    <button
                      @click="cartStore.incrementQuantity(product.id)"
                      class="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 text-center">
                  {{ formatearCantidad(product.price) }}
                </td>
                <td class="px-6 py-4 text-center">
                  {{ formatearCantidad(product.subtotal) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 bg-slate-200">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td></td>
                <td class="px-6 py-3 text-center">
                  {{ cartStore.totalItems }}
                </td>
                <td></td>
                <td class="px-6 py-3 text-center">
                  {{ formatearCantidad(cartStore.totalPrice) }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>
