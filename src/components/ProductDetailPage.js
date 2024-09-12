import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';



const ProductDetailPage = ({cart,setCart}) => {
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([]);

  const {id} = useParams();
  useEffect(()=>{
    const filterResult = items.filter((data)=>{
     return data.id == id
     
    })
    setProduct(filterResult[0]);

    const similarProducts = items.filter((data)=>{
     return data.category === product.category
    })
    setRelatedProduct(similarProducts)
    
  },[id,product.category])

  const addToCart = (id,imgsrc,title,description,price) =>{
    const obj={
        id, imgsrc, title, description, price
    }
    setCart([...cart, obj]);
    
    }
 
  
  
  
  return (
    <>
      <div className='container'>
        <div className='image'>
       <img src={product.imgsrc} alt=""></img>
       </div>
       <div>
       <h1>{product.title}</h1>
       <p>{product.description}.</p>
       <button className="button1">{product.price}{" "}₹ </button>
       <button onClick={()=>addToCart(product.id, product.imgsrc, product.title, product.description, 
       product.price)} className="button2">
       Add To Cart</button>
       </div>
      </div>
      <Product cart={cart} setCart={setCart} items={relatedProduct}/>
      </>
      
  )
}

export default ProductDetailPage