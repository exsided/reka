<template>
    <main class="default-layout">
        <HeaderVue class="default-layout__header"/>
        <SidebarVue class="default-layout__sidebar"/>
        <div class="default-layout__content">
            <slot/>
        </div>
        <FooterVue class="default-layout__footer"/>
    </main>
    <MainLoader/>
    <PopupVue/>
</template>

<script lang="ts">
import SidebarVue from '~/components/Sidebar/Sidebar.vue';
import HeaderVue from '~/components/Header/Header.vue';
import FooterVue from '~/components/Footer/Footer.vue';
import MainLoader from '~/components/MainLoader/MainLoader.vue';
import PopupVue from '~/components/Popup/Popup.vue';
import LayoutMixin from '~/mixins/layout.js';

export default {
    components: {
        SidebarVue,
        HeaderVue,
        FooterVue,
        MainLoader,
        PopupVue,
    },
    mixins: [LayoutMixin],
    setup() {
        return {
            ...LayoutMixin.setup(),
        };
    }
}
</script>

<style lang="scss" src="~/assets/scss/layouts/default.scss"/>
