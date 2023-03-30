import React from 'react'
import Category from '../comp/Category';
import Popular from '../comp/Popular';
import './stylePages.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='home-title'><h1>Popular recipes</h1></div>
      <Popular/>
    </div>
  )
}

export default Home
