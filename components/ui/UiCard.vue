<script setup lang="ts">
defineProps({
    /**
     * Картинка карточки
     */
    image: {
        type: String,
        required: true
    },
    /**
     * Описание карточки
     */
    description: {
        type: String,
        required: true
    },
    /**
     * Ссылка карточки
     */
    url: {
        type: String,
        required: true
    }
});

const readMoreLabel = 'Read more';
</script>

<template>
    <div :class="$style.UiCard">
        <div :class="$style.content">
            <NuxtImg :class="$style.image" :src="image"/>
            
            <div :class="$style.description">{{ description }}</div>
            
            <div :class="$style.linkWrap">
                <NuxtLink :class="$style.link" :to="url">{{ readMoreLabel }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" module>
.UiCard {
    cursor: pointer;
    position: relative;
    height: 37.8rem;
    overflow: visible;
    
    &:hover {
        .linkWrap {
            height: 3.6rem;
        }
    }
}

.content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}

.image {
    width: 100%;
    height: 28rem;
    margin-bottom: 2.4rem;
}

.description {
    font-size: 2rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    height: 7.4rem;
}

.linkWrap {
    height: 0;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    transition: height $default-transition;
}

.link {
    font-size: 2rem;
    color: $accent;
    line-height: 1.2;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
