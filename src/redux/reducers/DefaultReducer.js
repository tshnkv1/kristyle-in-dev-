const initState = {
    default: '',
}
const defaultReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}

export default defaultReducer;