<script setup lang="ts">
import type { ILinkItem } from '~/assets/types/layout';

defineProps({
    linkList: {
        type: Array<ILinkItem>,
        default: () => []
    }
});
</script>

<template>
    <div :class="$style.HeaderLinkList">
        <NuxtLink
            v-for="link in linkList"
            :key="link.url"
            :class="$style.link"
            :to="link.url"
        >
            {{ link.name }}
        </NuxtLink>
    </div>
</template>

<style lang="scss" module>
.HeaderLinkList {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;
}

.link {
    font-size: 2rem;
    line-height: 1;
    color: $dark;
}
</style>
