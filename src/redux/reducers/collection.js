const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case "GET_ALL_COLLECTION":
            return actions.payload;
        case "GET_COLLECTION_BY_ID":
            return actions.payload;
        default:
            return state;
    }
};
