import React from 'react'
import {NavLink} from 'react-router-dom'
const Category = () => {
  return (
    <div className='category'>
      <div className='category-content'>
        
            <NavLink to={'/'} className="links" >Home</NavLink>
            <NavLink to={'cuisine/italian'} className="links">Italian</NavLink>
            <NavLink to={'cuisine/american'} className="links">American</NavLink>
            <NavLink to={'cuisine/japanese'} className="links">Japanese</NavLink>
        
      </div>
    </div>
  )
}

export default Category

