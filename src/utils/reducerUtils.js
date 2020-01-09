const createReducer = (handlers = {}, initialState = {}) => {
    return (state = initialState, action) => {
        if (typeof handlers[action.type] === 'function') {
            return handlers[action.type](state, action);
        }
        return state;
    };
};

const exported = {
    createReducer,
};

export default exported;
export { createReducer };
