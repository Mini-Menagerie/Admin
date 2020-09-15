
const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case "GET_ALL_ADMIN":
            return actions.payload;
        case "GET_ADMIN_DASHBOARD":
            return actions.payload;

        default:
            return state;
    }
};