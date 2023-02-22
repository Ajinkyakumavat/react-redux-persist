import React from 'react'
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom'
import Aboutus from './component/Aboutus'
import Contactus from './component/Contactus'
import Login from './component/Login'
import Logout from './component/Logout'
import Home from '../src/component/Home'
import Navabr from './Navabr'
import { useSelector } from 'react-redux'

const App = () => {
  const common = useSelector(state => state.commonReducer)
  return (
    <div className='container'>
      {/* <Home/> */}
      <Router basename='/demo'>
        <Navabr />
        {common.fname ? (  
          <Routes>
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/contact' element={<Contactus />} />
            <Route path='/Logout' element={<Logout />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='*' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        )}

      </Router>
    </div>
  )
}

export default App