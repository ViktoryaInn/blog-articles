<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
    error: Object as () => NuxtError
});

const backHomeText = 'Go back home';
</script>

<template>
    <div>
        <h1>{{ error.statusCode }}</h1>
        <NuxtLink to="/">{{ backHomeText }}</NuxtLink>
    </div>
</template>
