import {useSubscriptionsStore} from '@/store/subscriptions'
import {useMainStore} from '@/store/main'

export const useMySubscriptionsLoaded = async () => {
    const instance = getCurrentInstance() as { uid: number};
    const subscriptionsStore = useSubscriptionsStore();
    const mainStore = useMainStore();
    const loadingKey = instance.uid + 'useMySubscriptionsLoaded'

    await subscriptionsStore.fetchMySubscriptions();

    watchEffect(() => mainStore[unref(subscriptionsStore.subscriptionsIsFetching) ? 'enableLoading' : 'disableLoading'](loadingKey));
};

