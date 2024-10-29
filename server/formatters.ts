export const DEFAULT_FORMATTER = ({data, status = 'success'}: {data: any, status?: string}) => {
    return { data, status }
};

export const ITEMS_FORMATTER = ({items, status = 'success'}: {items: any[], status?: string}) => {
    return { items, status }
};

