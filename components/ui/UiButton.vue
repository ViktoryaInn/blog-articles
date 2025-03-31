<script setup lang="ts">
const props = defineProps({
    /**
     * Определяет классы, которые будут модифицировать размер
     *  @values small, medium
     */
    size: {
        type: String,
        default: 'medium',
        validator(value: string): boolean {
            return ['medium', 'small'].includes(value);
        }
    },
    /**
     * Определяет классы, которые будут модифицировать цвет
     * @values primary, secondary
     */
    color: {
        type: String,
        default: 'primary',
        validator(value: string): boolean {
            return ['primary', 'secondary'].includes(value);
        }
    },
    /**
     * Модификатор вида кнопки с бордером
     */
    border: {
        type: Boolean,
        default: false,
    },
    /**
     * Активное состояние кнопки
     */
    active: {
        type: Boolean,
        default: false
    },
    /**
     * Это свойство отключает взаимодействие
     */
    disabled: {
        type: Boolean,
        default: false
    },
    /**
     * Модификатор равносторонней кнопки (например для кнопок с инонками)
     */
    equal: {
        type: Boolean,
        default: false
    },
    /**
     * Модификатор кнопки c border-radius: 50%
     */
    rounded: {
        type: Boolean,
        default: false
    },
});

const $style = useCssModule();
const classList = computed(() => [
    {
        [$style[`_${props.color}`]]: props.color,
        [$style[`_${props.size}`]]: props.size,
        [$style._disabled]: props.disabled,
        [$style._active]: props.active,
        [$style._border]: props.border,
        [$style._equal]: props.equal,
        [$style._rounded]: props.rounded,
    },
]);
</script>

<template>
    <button :class="[$style.UiButton, classList]" @click="$emit('click')">
        <slot />
    </button>
</template>

<style lang="scss" module>
.UiButton {
    border: 1px solid;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    transition: all $default-transition;
    line-height: 1;
    
    /* Sizes */
    &._medium {
        height: calc(5.2rem - 1px);
        padding: 1.6rem 2.8rem;
        border-radius: 1.4rem;
        font-size: 2rem;
        
        &._equal {
            width: calc(5.2rem - 1px);
        }
        
        &._rounded {
            border-radius: 2.6rem;
        }
    }
    
    &._small {
        height: calc(4.4rem - 1px);
        padding: 1.4rem 2.6rem;
        border-radius: 1.2rem;
        font-size: 1.6rem;
        
        &._equal {
            width: calc(4.4rem - 1px);
        }
        
        &._rounded {
            border-radius: 2.2rem;
        }
    }
    
    /* Colors */
    &._primary {
        background-color: $dark;
        border-color: $dark;
        color: $white;
    }
    
    &._secondary {
        background-color: $dark-200;
        border-color: $dark-200;
        color: $dark;
        
        &:hover {
            background-color: $dark-400;
            border-color: $dark-400;
        }
        
        &:active,
        &._active {
            background-color: $dark;
            border-color: $dark;
            color: $white;
        }
        
        &._border {
            background-color: white;
            color: $dark-700;
            
            &:hover {
                background-color: $dark-400;
                border-color: $dark-400;
            }
            
            &:active,
            &._active {
                color: $white;
                background-color: $dark;
                border-color: $dark;
            }
        }
    }
    
    &._disabled {
        opacity: 0.6;
        pointer-events: none;
        cursor: not-allowed;
    }
    
    &._equal {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
