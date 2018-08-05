export default function (state=null, active) {
    switch(active.type) {
        case 'GET_TASKS':
            return active.payload;
        default:
            return state;
    }
}