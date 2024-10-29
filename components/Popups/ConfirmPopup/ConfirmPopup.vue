<template>
    <div class="confirm-popup">
        <p class="confirm-popup__title">
            {{ title }}
        </p>
        <p class="confirm-popup__description">
            {{ description }}
        </p>
        <UiButton
            @click="onConfirm"
            class="confirm-popup__btn"
        >
            {{ buttonText }}
        </UiButton>
    </div>
</template>

<script lang="ts" setup>
import UiButton from '~/components/UI/Button/Button.vue';
import {usePopupsStore} from "~/store/popups";

const emit = defineEmits<{
  close: []
}>();

const popupsStore = usePopupsStore();
const onConfirm = () => {
    emit('close');
    popupsStore.data?.confirmCallback();
};

const title = computed(() => popupsStore.data?.title)
const description = computed(() => popupsStore.data?.description)
const buttonText = computed(() => popupsStore.data?.buttonText  || 'Confirm')
</script>

<style lang="scss" src="@/components/Popups/ConfirmPopup/styles.scss"/>
