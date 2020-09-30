import axios from '../../helpers/axios';

export const getAllCats = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Cat')
    await dispatch({
        type: "GET_ALL_CAT",
        payload: cat.data.data
    })
}