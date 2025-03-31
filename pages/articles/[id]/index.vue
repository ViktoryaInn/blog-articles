<script setup lang="ts">
// Types
import type {IArticle} from '~/assets/types/article';

// Composables
import { useApiFetch } from '~/composables/useApiFetch';

const route = useRoute()
const { data, error } = await useAsyncData(
    'post-detail',
    () => useApiFetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`)
);
let article: IArticle | null = null;

if (error.value) {
    console.warn('[fetchArticleData/SSR] SSR request error', error.value);
    throw createError({
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
    })
} else if (data) {
    article = data as unknown as IArticle;
}

const descriptionLabel = 'About';
const randomImageUrl = 'https://picsum.photos/1216/700';
</script>

<template>
    <div :class="$style.ArticleDetailPage" class="page container">
        <h2 v-if="article?.title" :class="$style.title">{{article.title}}</h2>
        
        <NuxtImg :class="$style.image" :src="randomImageUrl" />
        
        <div v-if="article?.description" :class="$style.descriptionWrap">
            <div :class="$style.descriptionLabel">
                {{ descriptionLabel }}
            </div>
            
            <p :class="$style.description">
                {{ article.description }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" module>
.ArticleDetailPage {
    //
}

.title {
    margin-bottom: 6.4rem;
    font-size: 8.4rem;
    line-height: 1;
}

.image {
    width: 100%;
    height: 70rem;
    margin-bottom: 7.4rem;
}

.descriptionWrap {
    width: 69.4rem;
}

.descriptionLabel {
    margin-bottom: 2.4rem;
    line-height: 1;
}

.description {
    font-size: 3.6rem;
    line-height: 1.24;
}
</style>
