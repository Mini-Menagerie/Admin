const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case "GET_PET_BY_ID":
            return actions.payload;
        default:
            return state;
    }
};
