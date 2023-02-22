import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navabr = () => {
  const common = useSelector(state => state.commonReducer)
  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none", float: "right" }}>
        {common.fname ? (
          <>
            <li style={{ marginLeft: "10px" }}><Link to='/'> Home </Link></li>
            <li style={{ marginLeft: "10px" }}><Link to='/about'> Aboutus </Link></li>
            <li style={{ marginLeft: "10px" }}><Link to='/contact'> Contact </Link></li>
            <li style={{ marginLeft: "10px" }}><Link to='/logout'> Logout </Link></li>
          </>
        ) : (
          <li style={{ marginLeft: "10px" }}><Link to='/login'> Login </Link></li>

        )}
      </ul>
    </div>
  )
}

export default Navabr