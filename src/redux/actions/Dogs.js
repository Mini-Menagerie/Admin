import axios from '../../helpers/axios';

export const getAllDogs = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Dog')
    await dispatch({
        type: "GET_ALL_DOG",
        payload: dog.data.data
    })
}