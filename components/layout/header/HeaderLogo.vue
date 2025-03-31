<script setup lang="ts"></script>

<template>
    <NuxtLink to="/">
        <Icon :class="$style.logo" name="icons:qtim"/>
    </NuxtLink>
</template>

<style lang="scss" module>
.logo {
    width: 8.4rem;
    height: 2.5rem;
    color: $dark;
}
</style>
