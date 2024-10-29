import {MY_SUBSCRIPTIONS} from '~/server/constants/subscriptions';
import {DEFAULT_FORMATTER} from '~/server/formatters';

export default defineEventHandler(async () => {
    for (const subscriptionIndex in MY_SUBSCRIPTIONS)
        MY_SUBSCRIPTIONS[subscriptionIndex].subscribed = false;

    return new Promise(resolve => setTimeout(resolve, 500, DEFAULT_FORMATTER({data: true as any})));
});
