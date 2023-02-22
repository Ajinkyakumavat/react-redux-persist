import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const common = useSelector(state => state.commonReducer)
  return (
    <div>
      <h1>Home</h1>
      <ol style={{listStyle:"none"}}>
        <li>{common.fname}</li>
        <li>{common.email}</li>
        <li>{common.mobile}</li>
      </ol>
    </div>
  )
}

export default Home