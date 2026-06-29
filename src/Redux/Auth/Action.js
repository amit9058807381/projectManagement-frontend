import axios from "axios"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST,LOGIN_SUCCESS ,LOGOUT,REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes"
import { API_BASE_URL } from "@/Config/api"



export const register=userData=>async(dispatch)=>{
console.log("REGISTER ACTION CALLED");
    dispatch({type:REGISTER_REQUEST})

    try{
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        console.log("DATA=",data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            dispatch({type:REGISTER_SUCCESS,payload:data})
        }
        console.log("register success",data)
    }catch(error){
        console.log(error)
        console.log("whai is peoblem ")
    }
}

export const login=userData=>async(dispatch)=>{

    dispatch({type:LOGIN_REQUEST})

    try{
        const {data}=await axios.post(`${API_BASE_URL}/auth/signing`,userData)
        console.log("DATA=",data);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            dispatch({type:LOGIN_SUCCESS,payload:data})
        }
        console.log("login success",data)
    }catch(error){
        console.log(error)
    }
}

export const getUser=()=>async(dispatch)=>{

    dispatch({type:GET_USER_REQUEST})

    try{
        const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{
             headers:{
                Authorization:`Bearer ${localStorage.getItem("jwt")}`
             },
             })
        
           
            dispatch({type:GET_USER_SUCCESS,payload:data})
        
        console.log("user success",data)
        console.log("get user successfull")
    }catch(error){
        console.log(error)
        console.log("kira proble hai")
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.clear();
}