export const GET_INDEX_BY_ID = <T extends {id: string|number}>(id: number, items: T[]): number => {
    return items.findIndex(item => item.id === id);
};
