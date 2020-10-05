import axios from '../../helpers/axios';

export const getAllDogs = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Dog')

    await dispatch({
        type: "GET_ALL_DOG",
        payload: dog.data.data
    })
}

export const getSmallDog = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Small Dog')
    let doggo = await dog.data.data
    await dispatch({
        type: "GET_ALL_DOG",
        payload: doggo
    })
}

export const getMediumDog = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Medium Dog')
    let doggo = await dog.data.data
    await dispatch({
        type: "GET_ALL_DOG",
        payload: doggo
    })
}

export const getBigDog = () => async (dispatch) =>  {
    let dog = await axios.get('/petdetail/?search=Big Dog')
    let doggo = await dog.data.data
    await dispatch({
        type: "GET_ALL_DOG",
        payload: doggo
    })
}