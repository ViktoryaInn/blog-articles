<script setup lang="ts">
// Components
import TheHeader from "~/components/layout/TheHeader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
</script>

<template>
    <div>
        <TheHeader/>
        
        <main>
            <slot />
        </main>
        
        <TheFooter/>
    </div>
</template>
