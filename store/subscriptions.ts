import {defineStore} from 'pinia';
import {SubscriptionsApi} from '~/api/subscriptions';
import {ISubscription, SubscriptionProps} from '~/interfaces/Subscription';

export const useSubscriptionsStore = defineStore('subscriptions', () => {
    const subscriptions = ref<ISubscription[]>([]);
    const subscriptionsIsFetching = ref(false);

    const hasActivitySubscriptions = computed(() => {
        return subscriptions.value.some(subscription => subscription.subscribed);
    });

    const happinessPercentage = computed(() => {
        if (!unref(hasActivitySubscriptions))
            return 0;

        const activeSubscriptionsCount = subscriptions.value.filter(subscription => subscription.subscribed).length;
        const allSubscriptionsCount = subscriptions.value.length;

        return Math.floor(CALCULATE_PROPORTION(activeSubscriptionsCount, allSubscriptionsCount));
    });

    const fetchMySubscriptions = async () => {
        subscriptionsIsFetching.value = true;
        const {data, error} = await SubscriptionsApi.fetch();

        subscriptionsIsFetching.value = false;

        if (error) {
            return;
        }

        subscriptions.value = data;
    };

    const changeSubscriptionActivity = async (id: number, activity: boolean) => {
        const {error} = await SubscriptionsApi.changeSubscriptionActivity(id, activity);

        if (error) {
            return;
        }

        _replaceSubscriptionData(id, {subscribed: activity});
    }

    const _replaceSubscriptionData = (id: number, props: SubscriptionProps) => {
        const index = subscriptions.value.findIndex(subscriptions => subscriptions.id === id);

        for (const prop in props) {
            // @ts-ignore
            subscriptions.value[index][prop] = props[prop];
        }
    };

    const unsubscribeFromAll = async () => {
        const {error} = await SubscriptionsApi.unsubscribeFromAll();

        if (error) {
            return;
        }

        _unsubscribeFromAll();
    };

    const _unsubscribeFromAll = () => {
        for (const subscriptionIndex in subscriptions.value)
            subscriptions.value[subscriptionIndex].subscribed = false;
    };

    return {
        subscriptions,
        subscriptionsIsFetching,
        happinessPercentage,
        fetchMySubscriptions,
        changeSubscriptionActivity,
        unsubscribeFromAll,
        hasActivitySubscriptions,
    };
});
