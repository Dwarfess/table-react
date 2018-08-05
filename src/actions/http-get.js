export const httpGet = (tasks) => {
    return {
        type:'GET_TASKS',
        payload:tasks
    }
};