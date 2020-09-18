import axios from '../../helpers/axios';

export const getAllProducts = () => async (dispatch) => {
    let result = await axios.get('/product')
    console.log(result);

    await dispatch({
        type: "GET_ALL_PRODUCT",
        payload: result.data.result
    })
}

export const addProduct = (values) => async (dispatch) => {
    let result = await axios.post('/product/register', values)
    console.log(result);

    await dispatch({
        type: "ADD_ONE_PRODUCT",
        payload: result.data.message
    })

}

export const updateProduct = (values, id, history) => async (dispatch) => {
    let result = await axios.put(`/product/${id}`, values)
    console.log(result);
    if(result.status === 200){
        await dispatch({
            type: "UPDATE_ONE_PRODUCT",
            payload: result.data.message
        })
        history.goBack();
    } else {
        alert('error')
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    let result = await axios.delete(`/Product/${id}`)
    if(result.status === 200){
        alert('deleted')

        dispatch(getAllProducts());
    } else {
        alert('error')
    }
}

