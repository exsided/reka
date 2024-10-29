import {STATUS} from '@/constants/statuses.ts';
import {fetchTasksResponseParser} from '~/api/subscriptions/parsers'

export const SubscriptionsApi = {
    async fetch() {
        const {data, error} = await useFetch('/api/subscriptions');
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('subscriptions fetch ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData) {
            return {data: fetchTasksResponseParser(unrefData), error: null};
        }
    },

    async changeSubscriptionActivity(id, activity) {
        const {data, error} = await useFetch(`/api/subscriptions/change-subscription-activity/${id}`, {
            method: 'PUT',
            body: {activity},
        });
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('subscriptions changeSubscriptionStatus ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData?.status === STATUS.success) {
            return {data: unrefData, error: null};
        }
    },

    async unsubscribeFromAll() {
        const {data, error} = await useFetch('/api/subscriptions/unsubscribe-from-all');
        const unrefData = unref(data);
        const unrefError = unref(error);

        if (unrefError) {
            console.error('subscriptions unsubscribeFromAll ->', unrefError);
            return {data: null, error: unrefError};
        }

        if (unrefData) {
            return {data: fetchTasksResponseParser(unrefData), error: null};
        }
    },
};
