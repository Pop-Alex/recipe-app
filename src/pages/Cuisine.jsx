import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Category from '../comp/Category';


const API ="8994b4563c5342d99af622f8872df0c3";
const Cuisine = () => {
    const [cus,setCus] = useState([])
    let params = useParams()

    const getCuisine = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${name}`)
        const recipes = await data.json()
        setCus(recipes.results);
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])

  return (
    <div className='cuisine'>
      {cus.map((item)=>{
        return (
            <div key={item.id} className="cuisine-content">
              <img src={item.image} alt="img"  />
                <p>{item.title}</p>
            </div>
        )
      })}
    </div>
    
  )
}

export default Cuisine
