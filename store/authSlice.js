import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null,
    token:null,
    otp:null
}

const authSlice =  createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true
            state.userData = action.payload.userData
            state.token = action.payload.token
        },
        logout:(state)=>{
            state.status = false
            state.userData = null
            state.token = null
        },
        forgetPassword: (state,action) =>{
            state.otp = action.payload.otp
        }
    }
})

export const {login, logout, forgetPassword} =  authSlice.actions

export default authSlice.reducer
