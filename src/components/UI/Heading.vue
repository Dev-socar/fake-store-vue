<script setup>
defineProps({
    text: String
})
</script>

<template>
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold">
       {{ text }} 
    </h1>
</template>


