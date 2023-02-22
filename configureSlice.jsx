import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fname:"",
    email:"",
    mobile:""
}


const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers:{
        updateState:(state, action) =>{
            assignValueInState(action.payload, state)
        },
        resestState:(state) => {
            assignValueInState(initialState, state)
        }
    }
})

const assignValueInState = (obj, state) => {
    for(const key in obj) {state[key] = obj[key]}
}

export const {updateState, resestState} = commonSlice.actions

export default commonSlice.reducer;