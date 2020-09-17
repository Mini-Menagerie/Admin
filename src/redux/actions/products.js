const url = process.env.REACT_APP_API_URL;

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/api/user/audience`, options);
    const result = await response.json();
   

    await dispatch({
        type: GET_ALL_PRODUCTS,
        payload: result,
    });
};