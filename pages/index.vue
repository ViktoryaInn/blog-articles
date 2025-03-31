<script setup lang="ts">
// Components
import UiCard from '~/components/ui/UiCard.vue';
import UiPagination from '~/components/ui/UiPagination.vue';
import UiLoading from '~/components/ui/UiLoading.vue';

// Types
import type {IArticle} from '~/assets/types/article';

// Composables
import {useApiFetch} from '~/composables/useApiFetch';

const data: IArticle[] = await useApiFetch('/posts/');

const pageTitle = 'Articles';
const isLoading = ref(false);
const pageOffset = ref(0);
const pageLimit = 8;

const visibleArticles = computed(() => {
    if (!data || !data.length) {
        return [];
    }
    return data.slice(pageOffset.value, pageOffset.value + pageLimit);
});

function getArticleUrl(articleId: string) {
    return `/articles/${articleId}/`;
}

function getRandomImageUrl(articleId: string) {
    return `https://picsum.photos/seed/${articleId}/200/300`;
}

function handlePaginate(offset: number) {
    isLoading.value = true;
    setTimeout(() => {
        pageOffset.value = offset;
        isLoading.value = false;
    }, 600);
}
</script>

<template>
    <div class=" page container">
        <h2 :class="$style.title">{{ pageTitle }}</h2>
        
        <Transition name="fade" mode="out-in">
            <div v-if="visibleArticles.length && !isLoading" :class="$style.content">
                <div :class="$style.grid">
                    <UiCard
                        v-for="(article) in visibleArticles"
                        :key="article.id"
                        :image="getRandomImageUrl(article.id)"
                        :description="article.description"
                        :url="getArticleUrl(article.id)"
                        :class="article.id"
                    />
                </div>
                
                <UiPagination
                    v-if="data?.length > 8"
                    :limit="pageLimit"
                    :offset="pageOffset"
                    :total-count="data.length"
                    @paginate="handlePaginate"
                />
            </div>
            
            <div v-else :class="$style.loadingWrap">
                <UiLoading :class="$style.loading"/>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" module>
.title {
    margin-bottom: 6.4rem;
    font-size: 8.4rem;
    line-height: 1;
}

.grid {
    display: grid;
    grid-gap: 6rem 3.2rem;
    //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 6.4rem;
}

.loadingWrap {
    width: 100%;
    height: 92.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading {
    color: $dark;
    width: 6.4rem;
    height: 6.4rem;
}
</style>
