<script setup lang="ts"></script>

<template>
    <svg
        :class="$style.UiLoading"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 16"
    >
        <g
            :class="$style.circle"
            clip-path="url(#a)"
        >
            <path d="M12.743 3.757 11.8 4.7A4.667 4.667 0 1 0 13.167 8H14.5a6 6 0 1 1-1.757-4.243Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.5 0h16v16H.5z"/>
            </clipPath>
        </defs>
    </svg>
</template>

<style module lang="scss">
.UiLoading {
    .circle {
        transform-origin: center;
        animation: rotate 1s ease-out infinite;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
}
</style>
