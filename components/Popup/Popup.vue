<template>
    <transition name="popup">
        <div
            v-if="isOpen"
            class="popup"
            :class="popupsStore.name ? `popup--${popupsStore.name}` : ''"
            tabindex="1"
        >
            <div
                v-click-outside="close"
                class="popup__content"
            >
                <div class="popup__close">
                    <button
                        class="popup__close-btn"
                        role="popup close button"
                        tabindex="-1"
                        @click="close"
                    >
                        <CrossMarkSvg/>
                    </button>
                </div>
                <div class="popup__content-inner">
                    <div class="popup__content-wr">
                        <Suspense>
                            <template #default>
                                <PopupContent @close="close"/>
                            </template>
                            <template #fallback>
                                <div class="popup__preloader">
                                    <UiLoader/>
                                </div>
                            </template>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import UiLoader from '~/components/UI/Loader/Loader.vue';
import CrossMarkSvg from '@/public/svg/cross-mark.svg?skipsvgo';
import {useMainStore} from '~/store/main';
import {usePopupsStore} from '~/store/popups';

const instance = getCurrentInstance() as { uid: number };

const popupsStore = usePopupsStore();
const mainStore = useMainStore();

const emit = defineEmits<{
    close: []
}>();

const keyup = (event: KeyboardEvent) => {
    if (event.key === 'Escape')
        close();
};
const close = () => {
    emit('close');
    popupsStore.setState('', false);
};

const isOpen = computed(() => popupsStore.open);

watch(isOpen, (newState) => {
    mainStore[newState ? 'disableScroll' : 'enableScroll'](instance.uid);
});

onMounted(() => document.addEventListener('keyup', keyup));
onBeforeUnmount(() => document.removeEventListener('keyup', keyup));

const PopupContent = computed(() => {
    const componentName = popupsStore.name;

    if (componentName)
        return defineAsyncComponent(() => import(`@/components/Popups/${componentName}/${componentName}.vue`));
    else
        return null;
});

</script>

<style lang="scss" src="@/components/Popup/styles.scss"/>
