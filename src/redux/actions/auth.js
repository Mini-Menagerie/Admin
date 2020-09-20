import axios from 'axios';

export const login = (formData, history) => async () => {
        await axios.post('http://localhost:8000/adminAccount/login', formData)
        .then(res=> {
            localStorage.setItem('menagerie', JSON.stringify(res.data.token))
            localStorage.setItem('admin', JSON.stringify(res.data.admin))
            
            alert('welcome')
            history.push('/dashboard/dashboard')
        })
        .catch(err=>{
            if(err.message === "Request failed with status code 500"){
                alert('account tidak ditemukan')
            } else if(err.message === "Request failed with status code 400"){
                alert('salah password')
            }
        })

}

export const logout = (history) => async () => {
    localStorage.removeItem("menagerie");
    localStorage.removeItem("admin");
    history.push("/");
};