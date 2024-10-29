<template>
    <div class="subscriptions-grid">
        <div class="subscriptions-grid__cards-grid">
            <SubscriptionCard
                v-for="item in items"
                :key="item.id"
                :id="item.id"
                :description="item.description"
                :preview="item.preview"
                :subscribed="item.subscribed"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import SubscriptionCard from '~/components/SubscriptionCard/SubscriptionCard.vue';
import {ISubscription} from '~/interfaces/Subscription';

interface IProps {
    items: ISubscription[],
    loading?: boolean,
};

withDefaults(defineProps<IProps>(), {
    items: () => [],
    loading: false,
});
</script>

<style lang="scss" src="~/components/SubscriptionsGrid/styles.scss"/>
