import axios from 'axios'
import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './userTypes'


export const fetchUserRequest = () =>{
    return{
        type:FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = user =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}
export const fetchUserFailure = error =>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUser = (id)=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(Response=>{
                const user=Response.data.data
                console.log(user)
                dispatch(fetchUserSuccess(user))
            }).catch(error=>{
                dispatch(fetchUserFailure(error.message))
            })
    }
}