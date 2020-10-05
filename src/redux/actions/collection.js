import axios from "../../helpers/axios";

export const getAllCollection = () => async (dispatch) => {
    let result = await axios.get("/petCollection");

    await dispatch({
        type: "GET_ALL_COLLECTION",
        payload: result.data.result,
    });
};

export const deleteCollection = (id) => async (dispatch) => {
    await axios.delete(`/petCollection/${id}`);

    dispatch(getAllCollection());
};

export const addCollection = (data, history) => async (dispatch) => {
    await axios.post(`/petCollection/create`, { ...data });

    history.goBack();
};

export const getCollectionByID = (id, data) => async (dispatch) => {
    const result = await axios.get(`/petCollection/${id}`);

    await dispatch({
        type: "GET_COLLECTION_BY_ID",
        payload: result.data.result,
    });
};

export const editCollection = (id, data, history) => async (dispatch) => {
    await axios.put(`/petCollection/${id}`, { ...data });

    history.goBack();
};
