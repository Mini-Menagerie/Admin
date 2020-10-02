import axios from '../../helpers/axios';

export const getAllDogs = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Dog')
    let doggo = await dog.data.data
    let filteredDog = await doggo.filter(item => item.collectionName === "")
    await dispatch({
        type: "GET_ALL_DOG",
        payload: filteredDog
    })
}