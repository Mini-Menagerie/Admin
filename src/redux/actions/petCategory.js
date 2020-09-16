import axios from '../../helpers/axios';

export const getAllCategoryPet = () => async (dispatch) => {
    let result = await axios.get('/categoryPet')
    // console.log(result);

    await dispatch({
        type: "GET_ALL_PET_CATEGORY",
        payload: result.data.result
    })
}