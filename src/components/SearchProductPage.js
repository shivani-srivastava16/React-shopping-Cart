import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchProductPage = ({cart,setCart}) => {
  const {term}= useParams();
  const[filterData, setFilterData] = useState([])

  useEffect(()=>{
    
      const datas = items.filter((data)=>{
        return data.title.toLowerCase().includes(term.toLowerCase())
      })
    setFilterData(datas)
    // console.log(datas);
    

  },[term])

  
  return (
    <>
    <Product cart={cart} setCart={setCart} items={filterData}/>
    </>
  )
}

export default SearchProductPage