<template>
    <div class="happiness-percentage">
            <p class="happiness-percentage__text">
                FUN YOU GET
            </p>
            <ProgressBar
                :percent="subscriptionsStore.happinessPercentage"
                show-percent
            />
            <p class="happiness-percentage__description">
                <b>Subscribe</b> to all our fun sites to upgrade your fun progress
            </p>
        </div>
</template>

<script lang="ts" setup>
import {useSubscriptionsStore} from '@/store/subscriptions'

const subscriptionsStore = useSubscriptionsStore()
</script>

<style lang="scss" src="~/components/HappinessPercentage/styles.scss"/>
