const petCategory = [];

export default (state = petCategory, actions) => {
    switch (actions.type) {
        case "GET_ALL_PET_CATEGORY":
            return actions.payload;
        default:
            return state;
    }
};