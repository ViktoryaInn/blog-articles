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
    <div :class="$style.FooterLinkList">
        <a
            v-for="link in linkList"
            :key="link.url"
            :class="$style.link"
            :href="link.url"
        >
            {{ link.name }}
        </a>
    </div>
</template>

<style lang="scss" module>
.FooterLinkList {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;
}

.link {
    line-height: 1.2;
    color: $dark;
    text-decoration: underline;
}
</style>
