<script setup lang="ts">
import FooterContacts from '~/components/layout/footer/FooterContacts.vue';
import FooterLinkList from "~/components/layout/footer/FooterLinkList.vue";
import type {ILinkItem} from '~/assets/types/layout';

const label = 'Is there a project?';
const text = 'Let’s work together';
const accentText = 'Go';

const footerLinkListLeft: ILinkItem[] = [
    { name: 'Facebook', url: 'https://t.me/qtim71' },
    { name: 'Instagram', url: 'https://t.me/qtim71' },
    { name: 'Telegram', url: 'https://t.me/qtim71' }
];
const footerLinkListRight: ILinkItem[] = [
    { name: 'Behance', url: 'https://t.me/qtim71' },
    { name: 'Linkedn', url: 'https://t.me/qtim71' },
    { name: 'Privacy Policy', url: 'https://t.me/qtim71' }
];
</script>

<template>
    <footer :class="$style.TheFooter">
        <div class="container">
            <div :class="$style.top">
                <div :class="$style.textWrap">
                    <div :class="$style.label">{{ label }}</div>
                    
                    <div :class="$style.text">{{ text }}</div>
                </div>
                
                <FooterContacts :class="$style.contacts"/>
            </div>
            
            <div :class="$style.bottom">
                <FooterLinkList v-if="footerLinkListLeft?.length" :link-list="footerLinkListLeft"/>
                
                <div :class="$style.accent">
                    <div :class="$style.accentText">{{ accentText }}</div>
                </div>
                
                <FooterLinkList v-if="footerLinkListRight?.length" :link-list="footerLinkListRight"/>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" module>
.TheFooter {
    background-color: $accent;
    padding: 12rem 0 3.2rem;
    position: relative;
    overflow: hidden;
}

.top {
    display: flex;justify-content: space-between;
}

.textWrap {
    width: 46.6rem;
}

.label {
    line-height: 1.2;
    margin-bottom: 6.4rem;
}

.text {
    font-size: 11.2rem;
    text-decoration: underline;
}

.contacts {
    width: 22.2rem;
    margin-top: 6.4rem;
    margin-right: 16.2rem;
}

.bottom {
    margin-top: 17.8rem;
    display: flex;
    justify-content: space-between;
}

.accent {
    position: absolute;
    width: 35.8rem;
    height: 35.8rem;
    background-color: $dark;
    border-radius: 50%;
    bottom: -17.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
}

.accentText {
    color: $white;
    font-size: 3.2rem;
    margin-bottom: 8.4rem;
}
</style>
