import React, { useEffect, useState } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import './stylecomp.css'
import '@splidejs/react-splide/css';

const API ="8994b4563c5342d99af622f8872df0c3";
const Popular = () => {
    const [popular,setPopular] = useState([])

    useEffect(()=>{
        getPopular();
    },[])

    const getPopular = async ()=>{
        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&number=9`)
        const data = await res.json()
        setPopular(data.recipes)
    }
    console.log(popular)
  return (
    <div className='popular'>
        <Splide options={{ perPage:3,
        drag:"free",
        gap:"5rem"
        }}>
          
          
      {popular.map((recipe)=>{
        return (
            <SplideSlide>
            <div key={recipe.id} className='popular-content'> 
              <img src={recipe.image} alt="img"  />
              <p>{recipe.title}</p>
            </div>
            </SplideSlide>
        )
      })}
      </Splide>
    </div>
  )
}

export default Popular
