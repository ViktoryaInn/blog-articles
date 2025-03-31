<script setup lang="ts">
// Components
import UiButton from '~/components/ui/UiButton.vue';

enum EDirection {
    prev = 'prev',
    next = 'next',
}

const props = defineProps({
    maxVisiblePages: {
        type: Number,
        default: 5,
    },
    
    limit: {
        type: Number,
        default: 8,
    },
    
    offset: {
        type: Number,
        default: 0,
    },
    
    totalCount: {
        type: Number,
        default: 100,
    },
});

const emit = defineEmits<{
    'paginate': [value: number],
}>();

const currentPage = computed(() => Math.floor(props.offset / props.limit) + 1);

const pagesCount = computed(() => Number(props.totalCount) ? Math.ceil(Number(props.totalCount) / props.limit) : 1);

const pages = computed(() => {
    const pages: (number | string)[] = [];
    
    if (pagesCount.value <= props.maxVisiblePages) {
        for (let i = 1; i <= pagesCount.value; i++) {
            pages.push(i);
        }
    } else {
        const half = Math.floor(props.maxVisiblePages / 2);
        
        if (currentPage.value <= half) {
            // Если текущая страница в первой половине
            lessHalf(pages);
        } else if (currentPage.value >= pagesCount.value - half) {
            // Если текущая страница в последней половине
            moreHalf(pages);
        } else {
            // Добавляем текущую страницу ближе к центру диапазона
            nearHalf(pages, half);
        }
    }
    
    return pages;
});

function lessHalf(pages: (number | string)[]) {
    const count = props.maxVisiblePages;
    
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    }
}

function moreHalf(pages: (number | string)[]) {
    const count = pagesCount.value - props.maxVisiblePages - 1;
    
    for (let i = count; i <= pagesCount.value; i++) {
        pages.push(i);
    }
}

function nearHalf(pages: (number | string)[], half: number) {
    const startPage = currentPage.value - half;
    const endPage = Math.min(currentPage.value + half, pagesCount.value);
    
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
}

function getPageIsActive(num: number) {
    return num === currentPage.value;
}

function handlePaginate(val: number | string | EDirection) {
    let offset = props.offset;
    
    if (val === EDirection.prev) {
        offset -= props.limit;
    } else if (val === EDirection.next) {
        offset += props.limit;
    } else {
        offset = props.limit * (Number(val) - 1);
    }
    
    emit('paginate', offset);
}

function isDisabled(val: number | string | EDirection): boolean {
    if (val === EDirection.prev) {
        return !(currentPage.value - 1);
    } else if (val === EDirection.next) {
        return props.offset + props.limit > Number(props.totalCount);
    }
    
    return false;
}
</script>

<template>
    <div :class="$style.UiPagination">
        <UiButton
            :disabled="isDisabled(EDirection.prev)"
            color="secondary"
            size="small"
            equal
            border
            @click="handlePaginate(EDirection.prev)"
        >
            <Icon :class="[$style.arrow, $style._prev]" name="icons:arrow-right" />
        </UiButton>
        
        <UiButton
            v-for="(page, index) in pages"
            :key="index"
            :active="getPageIsActive(Number(page))"
            :disabled="isDisabled(page)"
            color="secondary"
            size="small"
            equal
            @click="handlePaginate(page)"
        >
            {{ page }}
        </UiButton>
        
        <UiButton
            :disabled="isDisabled(EDirection.next)"
            color="secondary"
            size="small"
            equal
            border
            @click="handlePaginate(EDirection.next)"
        >
            <Icon :class="[$style.arrow, $style._next]" name="icons:arrow-right" />
        </UiButton>
    </div>
</template>

<style module lang="scss">
.UiPagination {
    display: flex;
    align-items: center;
    gap: .8rem;
}

.arrow {
    width: 2.4rem;
    height: 2.4rem;
    
    &._prev {
        transform: rotate(180deg);
    }
}
</style>
