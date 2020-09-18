import axios from '../../helpers/axios';

export const getAllImage = () => async (dispatch) => {
    let result = await axios.get('/productImage')
    console.log(result);

    await dispatch({
        type: "GET_ALL_IMAGE",
        payload: result.data.result
    })
}

export const addImage = (values) => async (dispatch) => {
    let result = await axios.post('/productImage/register', values)
    console.log(result);

    await dispatch({
        type: "ADD_ONE_IMAGE",
        payload: result.data.message
    })

}

export const updateImage = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/productImage/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_IMAGE",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deleteImage = (id) => async (dispatch) => {
    let result = await axios.delete(`/productImage/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllImage());
    } else {
        alert('error')
    }
}

