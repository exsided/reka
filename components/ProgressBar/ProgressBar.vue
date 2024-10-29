<template>
    <div class="progress-bar">
        <div class="progress-bar__placeholder">
            <div class="progress-bar__fill" :style="{width: `${validPercent}%`}"/>
        </div>
        <span class="progress-bar__percent-text">
            {{ displayPercent }}%
        </span>
    </div>
</template>

<script lang="ts" setup>
import {useNumberChangeAnimation} from '~/composables/useNumberChangeAnimation';

interface IProps {
    percent: number
    showPercent: boolean
}

const props = withDefaults(defineProps<IProps>(), {
    percent: 0,
    showPercent: false
});

const {value: animatedNumberTargetValue, displayValue: displayPercent} = useNumberChangeAnimation()

const updateAnimatedNumberTargetValue = (value: number) => animatedNumberTargetValue.value = value

const validPercent = computed(() => {
    const percentValue = animatedNumberTargetValue.value
    if (percentValue < 0) {
        return 0;
    } else if (percentValue > 100) {
        return 100;
    } else {
        return percentValue;
    }
})

watch(() => props.percent, (newValue: number) => updateAnimatedNumberTargetValue(newValue));

onMounted(() => updateAnimatedNumberTargetValue(props.percent))
</script>

<style lang="scss" src="~/components/ProgressBar/styles.scss"/>
