export const fetchTasksResponseParser = (data) => {
    return data.items;
}

export const createTaskResponseParser = (data) => {
    return data.data;
}
