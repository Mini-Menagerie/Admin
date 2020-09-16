import axios from '../../helpers/axios';

export const getAllAdmin = () => async (dispatch) => {
    let result = await axios.get('/adminAccount')
    console.log(result.data.result);

    await dispatch({
        type: "GET_ALL_ADMIN",
        payload: result.data.result
    })
}