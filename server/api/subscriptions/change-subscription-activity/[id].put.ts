import { MY_SUBSCRIPTIONS } from '~/server/constants/subscriptions';
import {GET_INDEX_BY_ID} from '~/server/utils';
import {DEFAULT_FORMATTER} from '~/server/formatters';

export default defineEventHandler(async (event) => {
    const id = Number(getRouterParam(event, 'id'));
    const body = await readBody(event);
    const updatingIndex = GET_INDEX_BY_ID(id, MY_SUBSCRIPTIONS);

    MY_SUBSCRIPTIONS[updatingIndex] = {...MY_SUBSCRIPTIONS[updatingIndex], subscribed: Boolean(body.activity), id};

    return new Promise(resolve => setTimeout(resolve, 500, DEFAULT_FORMATTER({data: MY_SUBSCRIPTIONS[updatingIndex] as any})));
});
