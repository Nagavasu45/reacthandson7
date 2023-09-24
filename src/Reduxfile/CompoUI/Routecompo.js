import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Editstudent from './Editstudent'
import Contactus from './Contactus'
import Newstudent from './Newstudent'
import Student from './Student'
import './sty.css'

const Routecompo = () => {
  return (
    <div >
        <BrowserRouter>
        <div className='one'>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to={'/'}>Home</NavLink>
        <NavLink  style={({isActive}) => ({color: isActive ? "green" : "white"})} to={'/Student'}>Student</NavLink>
        <NavLink style={({isActive}) => ({color: isActive ? "green" : "white"})} to={'/Contactus'}>Contactus</NavLink>
        </div>
        <Routes>
           <Route path='/' element={<Home />} />
            <Route path='/Editstudent' element={<Editstudent />} />
            <Route path='/Contactus' element={<Contactus />} />
            <Route path='/Newstudent' element={<Newstudent />} />
           <Route path='/Student' element={<Student />} />
          
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Routecompo
