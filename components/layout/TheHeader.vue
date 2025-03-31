<script setup lang="ts">
// Components
import HeaderLogo from '~/components/layout/header/HeaderLogo.vue';
import HeaderLinkList from '~/components/layout/header/HeaderLinkList.vue';
import UiButton from '~/components/ui/UiButton.vue';

// Types
import type {ILinkItem} from '~/assets/types/layout';

const buttonText = 'Let’s work';
const linkList: ILinkItem[] = [
    { name: 'Works', url: '/works' },
    { name: 'About', url: '/about' }
];
</script>

<template>
    <header :class="$style.TheHeader">
        <HeaderLogo/>
        
        <div :class="$style.right">
            <HeaderLinkList v-if="linkList?.length" :link-list="linkList" />
            
            <div :class="$style.buttonList">
                <UiButton
                    color="secondary"
                    border
                    equal
                    rounded
                >
                    <Icon :class="$style.flagIcon" name="icons:flag"/>
                </UiButton>
                
                <UiButton rounded>{{ buttonText }}</UiButton>
            </div>
        </div>
    </header>
</template>

<style lang="scss" module>
.TheHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
}

.right {
    display: flex;
    align-items: center;
    gap: 5.6rem;
}

.buttonList {
    display: flex;
    align-items: center;
    gap: 2.4rem;
}

.flagIcon {
    width: 2.4rem;
    height: 2.4rem;
}
</style>
