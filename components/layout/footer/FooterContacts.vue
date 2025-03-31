<script setup lang="ts">
import type {IAddressItem, IContactItem} from "assets/types/layout";

const addressList: IAddressItem[] = [
    {
        name: 'Office in Russia',
        url: 'https://maps.app.goo.gl/N7pX1Jh4ybJu9GeE8',
        text: 'Tula, Revolution 21, office 6'
    },
    {
        name: 'Office in Dubai',
        url: 'https://maps.app.goo.gl/cUMPUszfjpPCaLA59',
        text: '139 Ruben Station Lake Drew, NM 52678'
    }
];

const contact: IContactItem = {
    phone: '+7 (920) 278—00—68',
    email: 'qtim@agency.com'
};

const label = 'For all questions';
</script>

<template>
    <div :class="$style.FooterContacts">
        <div :class="$style.label">{{label}}</div>
        
        <div :class="$style.contact">
            <a :class="$style.contactItem" :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            <a :class="$style.contactItem" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
        
        <div v-for="(address, index) in addressList" :key="index" :class="$style.address">
            <div :class="$style.addressName" :href="`tel:${address.name}`">{{ address.name }}</div>
            <div :class="$style.addressText" :href="`mailto:${address.text}`">{{ address.text }}</div>
            <a :class="$style.addressLink" :href="address.url">
                <Icon :class="$style.addressIcon" name="icons:location"/>
            </a>
        </div>
    </div>
</template>

<style module lang="scss">
.FooterContacts {
    line-height: 1.2;
}

.label {
    margin-bottom: 2.4rem;
}

.contact {
    margin-bottom: 4.8rem;
}

.contactItem {
    display: block;
    
    &:not(:last-child) {
        margin-bottom: .2rem;
    }
}

.address {
    &:not(:last-child) {
        margin-bottom: 3.2rem;
    }
}

.addressName {
    margin-bottom: 1.2rem;
}

.addressText {
    margin-bottom: .8rem;
}

.addressLink {
    //
}

.addressIcon {
    width: 3.2rem;
    height: 3.2rem;
}
</style>
