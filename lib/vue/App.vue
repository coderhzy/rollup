<template>
    <div class="app">
        <h2>App计数器, {{ count }}</h2>
        <button @click="handleClick">+1</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'


const count = ref(0)

const handleClick = () => {
    count.value++
}
</script>

<style scoped>

</style>