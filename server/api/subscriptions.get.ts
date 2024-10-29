import { MY_SUBSCRIPTIONS } from '~/server/constants/subscriptions';
import { ITEMS_FORMATTER } from '~/server/formatters';

export default defineEventHandler(() =>  {
	return new Promise(resolve => setTimeout(resolve, 100, ITEMS_FORMATTER({items: MY_SUBSCRIPTIONS as any})));
});
