<template>
    <picture class="picture">
        <source
            v-if="webpSrcset"
            type="image/webp"
            :srcset="webpSrcset"
        >

        <img
            :alt="alt"
            :srcset="retinaSrcset"
            :src="imgObj.default"
            class="mega-beach-party-wheel__arrow"
        >
    </picture>
</template>

<script lang="ts" setup>
import {IPicture} from '~/interfaces/Picture';

interface IProps {
    imgObj: IPicture,
    alt?: string,
}

const props = defineProps<IProps>();

const retinaSrcset = computed(() => props.imgObj.retina ? `${props.imgObj.retina} 2x` : undefined);
const webpSrcset = computed(() => {
    const webpPath = props.imgObj.webp;
    const retinaWebpPath = props.imgObj.retinaWebp;

    if (webpPath && retinaWebpPath) {
        return `${webpPath} 1x, ${retinaWebpPath} 2x`
    } else if (webpPath || retinaWebpPath) {
        return webpPath || retinaWebpPath
    } else {
        return null
    }
});
</script>

<style lang="scss" src="~/components/UI/Picture/styles.scss"/>
