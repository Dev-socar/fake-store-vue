<script setup>
  import Enlace from "@/components/UI/Enlace.vue"
</script>

<template>
    <header class="w-full grid md:grid-cols-2 gap-2 items-center">
        <div>
            <h1 class="text-4xl font-bold">Fake Store Vue</h1>
            <p class="mt-5 text-gray-500 font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis aperiam porro.</p>
            <div class="mt-3 flex flex-col gap-2">
                <Enlace  text="Ver Promociones" classText="bg-purple-500 hover:bg-purple-700 text-white" />
                <Enlace to="products"  text="Ver Productos" classText="bg-orange-500 hover:bg-orange-700 text-white" />
            </div>
        </div>
        <div class="mt-5 md:mt-0">
            <img src="../../assets/header.svg" alt="Ilustracion">
        </div>
    </header>
</template>

