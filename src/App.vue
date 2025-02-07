<script setup>
import { RouterView } from "vue-router";
import Menu from "@/components/Navegation/Menu.vue";
import Toast from "@/components/UI/Toast.vue";
import Footer from "@/components/UI/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen relative">
    <Menu />
    <RouterView />
    <Footer />
    <Toast />
  </div>
</template>
