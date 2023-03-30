import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
const Routere = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
      </Routes>
    </div>
  )
}

export default Routere
