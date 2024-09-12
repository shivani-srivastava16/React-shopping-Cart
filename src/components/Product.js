import React from 'react'
import { Link } from 'react-router-dom'



const Product = ({items, cart, setCart}) => {

    const addToCart = (id,imgsrc,title,description,price) =>{
    const obj={
        id, imgsrc, title, description, price
    }
    setCart([...cart, obj]);
    
    }
    return (
        <>

        <div className='container my-5'>
                <div className='row' >
                    {
                        items.map((product) => {
                            return (
                                <>
                                <div className='col-lg-4   my-3  text-center'>                              
                                    <div className="card">
                                        <Link to={`/product/${product.id}`} 
                                        >
                                        <img src={product.imgsrc} className="card-img-top" alt="..."/>
                                        </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}.</p>
                                                <button className="btn btn-primary mx-3">{product.price}{" "}₹ </button>
                                                <button onClick={()=>addToCart(product.id, product.imgsrc, 
                                                    product.title, product.description, product.price)} 
                                                    className="btn btn-warning">Add To Cart</button>
                                            </div>
                                    </div>
                                    
                                </div>    
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Product