<template>
    <div class="page-heading">
        <div class="page-heading__wrapper">
            <h1 v-if="hasTitle">
                <slot name="title" />
            </h1>
            <div
                v-if="hasActions"
                class="page-heading__actions"
            >
                <slot name="actions" />
            </div>
        </div>
        <p
            v-if="hasDescription"
            class="page-heading__description"
        >
            <slot name="description" />
        </p>
    </div>
</template>

<script lang="ts" setup>
const instance = getCurrentInstance();

const hasTitle = computed(() => Boolean(instance?.slots?.title));
const hasActions = computed(() => Boolean(instance?.slots?.actions));
const hasDescription = computed(() => Boolean(instance?.slots?.description));
</script>

<style lang="scss" src="~/components/PageHeading/styles.scss" />
