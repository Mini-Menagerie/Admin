import axios from '../../helpers/axios';

export const getAllCats = () => async (dispatch) =>  {
    let cat = await axios.get('/petdetail/?search=Cat')
    let catto = await cat.data.data
    let filteredCat = await catto.filter(item => item.collectionName === "")
    await dispatch({
        type: "GET_ALL_CAT",
        payload: filteredCat
    })
}