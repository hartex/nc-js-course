import initialState from './../initial-state';

const userReducer = function (state = initialState.users, action) {
    if (action.type === 'INITIALIZE_USERS') {
        return state.concat(action.users);
    }
    return state;
};

export default userReducer;