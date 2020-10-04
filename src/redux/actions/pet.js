import axios from "../../helpers/axios";

export const getPetByID = (id) => async (dispatch) => {
    let result = await axios.get(`/pet/${id}`);

    await dispatch({
        type: "GET_PET_BY_ID",
        payload: result.data.result,
    });
};
