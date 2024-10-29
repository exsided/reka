<template>
    <div class="subscription-card">
        <UiPicture
            class="subscription-card__picture"
            :img-obj="preview"
        />
        <p class="subscription-card__description">
            {{ description }}
        </p>
        <UiButton
            class="subscription-card__button"
            size="small"
            :color="subscribed ? 'light' : 'primary'"
            :with-icon="subscribed"
            rounded
            @click="toggleActivity"
        >
            <CheckedSvg v-if="subscribed" class="subscription-card__button-icon" />
            <template v-if="subscribed">
                Subscribed
            </template>
            <template v-else>
                Subscribe
            </template>
        </UiButton>
        <Transition name="fade">
            <div
                v-if="loading"
                class="subscription-card__loader-overlay"
            >
                <UiLoader class="subscription-card__loader"/>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import {ISubscription} from '~/interfaces/Subscription';
import UiPicture from '~/components/UI/Picture/Picture.vue';
import UiButton from '~/components/UI/Button/Button.vue';
import UiLoader from '~/components/UI/Loader/Loader.vue';
import CheckedSvg from '~/public/svg/checked.svg?skipsvgo';
import {useSubscriptionsStore} from '~/store/subscriptions';

type Props = Pick<ISubscription, 'id' | 'description' | 'subscribed' | 'preview'>;

const props = defineProps<Props>();
const subscriptionsStore = useSubscriptionsStore();

const loading = ref(false);

const toggleActivity = async () => {
    if (unref(loading)) {
        return;
    }

    loading.value = true;

    try {
        await subscriptionsStore.changeSubscriptionActivity(props.id, !props.subscribed)
    } finally {
        setTimeout(() => loading.value = false, 200);
    }
};
</script>

<style lang="scss" src="~/components/SubscriptionCard/styles.scss"/>
