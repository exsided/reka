<template>
    <button
        :class="BEM('ui-button', {color, size, rounded, withIcon})"
        :role="role"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
interface IProps {
    color?: 'gray' | 'primary' | 'light'
    size?: 'small' | 'medium'
    rounded?: boolean
    withIcon?: boolean
    role?: string
};

withDefaults(defineProps<IProps>(), {
    color: 'primary',
    size: 'medium',
    rounded: false,
    withIcon: false,
    role: 'button',
});
</script>

<style lang="scss" src="~/components/UI/Button/styles.scss"/>
