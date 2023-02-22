import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resestState } from '../redux/configureSlice'

const Logout = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
  const logout = () => {
      dispatch(resestState())
      navigate('/login')
  }
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout