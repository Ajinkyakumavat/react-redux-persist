import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {updateState} from '../redux/configureSlice'

const Login = () => {
    const common = useSelector(state => state.commonReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = () => {
        dispatch(updateState({
            fname:"ajinkya",
            mobile:"7263994600",
            email:"ajink3994@gmail.com"            
        }))
        navigate('/')
    }
  return (
    <div>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login