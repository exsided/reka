import {defineStore} from 'pinia';

export const usePopupsStore = defineStore('popups', () => {
    const open = ref(false);
    const name = ref('');
    const data = ref<any>(null);

    const setState = (popupName: string, value: boolean) => {
        open.value = value;
        name.value = popupName;
    };

    const setData = (payload: any) => {
        data.value = payload;
    };

    return {
        open,
        name,
        data,
        setState,
        setData,
    };
});
