<template>
    <NuxtLayout name="default">
        <div class="index-page container">
            <PageHeading>
                <template #title>
                    Ok, let’s change your preferences
                </template>
                <template #actions>
                    <UiButton
                        v-if="hasActivitySubscriptions"
                        color="gray"
                        @click="unsubscribeFromAll"
                    >
                        Unsubscribe from all
                    </UiButton>
                </template>
                <template #description>
                    To unsubscribe, please uncheck the appropriate box(es).
                </template>
            </PageHeading>
            <HappinessPercentage class="index-page__happiness-percentage"/>
            <SubscriptionsGrid
                :items="subscriptionsStore.subscriptions"
                class="index-page__subscriptions-grid"
            />
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import HappinessPercentage from '~/components/HappinessPercentage/HappinessPercentage.vue';
import SubscriptionsGrid from '~/components/SubscriptionsGrid/SubscriptionsGrid.vue';
import UiButton from '~/components/UI/Button/Button.vue';
import {useMySubscriptionsLoaded} from "~/composables/useMySubscriptionsLoaded";
import {useSubscriptionsStore} from '~/store/subscriptions';
import {useMainStore} from '~/store/main';
import {usePopupsStore} from '~/store/popups';
import {POPUP_NAMES} from '~/constants/popups';

const instance = getCurrentInstance() as { uid: number };
const subscriptionsStore = useSubscriptionsStore();
const mainStore = useMainStore();
const popupsStore = usePopupsStore();

useMySubscriptionsLoaded();

const hasActivitySubscriptions = computed(() => subscriptionsStore.hasActivitySubscriptions);

const unsubscribeFromAll = () => {
    const confirmPopupCallback = async () => {
        const loadingKey = instance.uid + 'unsubscribeFromAll';

        mainStore.enableLoading(loadingKey);
        try {
            await subscriptionsStore.unsubscribeFromAll();
        } finally {
            mainStore.disableLoading(loadingKey);
        }
    };
    const confirmPopupTitle = 'Are you sure?';
    const confirmPopupDescription = `Please confirm that you want to unsubscribe from all and lose ${subscriptionsStore.happinessPercentage}% fun.`;

    popupsStore.setData({
        title: confirmPopupTitle,
        description: confirmPopupDescription,
        confirmCallback: confirmPopupCallback,
    });
    popupsStore.setState(POPUP_NAMES.confirm, true);
};

</script>

<style lang="scss" src="@/pages/index/styles.scss"/>
