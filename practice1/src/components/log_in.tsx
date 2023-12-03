"use client"
import React, { useState } from "react"
import { useDispatch } from "react-redux/es/exports"
import { login,logout,toggleModerator } from "@/redux/features/auth-slice"
import { AppDispatch } from "@/redux/store"
import { useAppSelector } from '@/redux/store'

export const Login=()=>{
    const [userName,setUserName]=useState("")
  const isAuth=useAppSelector(state=>state.authReducer.value.isAuth)
    
    const dispatch=useDispatch<AppDispatch>()
    const handleLogin=()=>{
        dispatch(login(userName))
    }
    const handleLogOut=()=>{
        dispatch(logout())
    }
    const handleToggle=()=>{
        dispatch(toggleModerator())
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    return(
        <>
        <input type="text" onChange={e=>handleChange(e)}/>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        {isAuth && 
        <button onClick={handleToggle}>Toggle Moderator Status</button>}
        </>
    )
}