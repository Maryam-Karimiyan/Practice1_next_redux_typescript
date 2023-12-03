import {createSlice,PayloadAction} from "@reduxjs/toolkit"
type AuthState={
    isAuth:boolean,
    isModerator:boolean,
    uId:string,
    userName:string
}
type InitialState={
    value:AuthState
}
const initialState={
    value:{
        isAuth:false,
        isModerator:false,
        userName:"",
        uId:""
    }as AuthState

}as InitialState
export const auth=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        logout:()=>{
            return initialState;
        },
        //action زمانی که از کامپوننت بخواهیم چیزی بفرستیم استفاده میشه
        login:(state,action:PayloadAction<string>)=>{
                return{
                    value:{
                        isAuth:true,
                        userName:action.payload,
                        uId:"kjhkhkjhjkhk7678686jhgjhg",
                        isModerator:false
                    }
                }
        },
        toggleModerator:(state)=>{
            state.value.isModerator=!state.value.isModerator
        }
    }
})
export const {login,logout,toggleModerator}=auth.actions
export default auth.reducer