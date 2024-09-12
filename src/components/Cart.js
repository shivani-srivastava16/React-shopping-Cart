import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div >
        {
          cart.length == 0 ?(
            <div className='text-center'>
          <h2 >
            Cart is Empty
            </h2>
            <Link to={"/"} className="btn btn-warning ">Contunue Shopping.....</Link>
            </div>
          ):
          cart.map((product) => {
            return (
              <>
                <div className="card mb-3" style={{width:'700px', margin:'10px'}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.imgsrc}  className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description} </p>
                        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                        
                        </div>
                        <button className="btn btn-primary mx-3">{product.price}{" "}₹ </button>
                        <button className="btn btn-warning mx-3">Buy Now </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
        {
        cart.length!=0 &&(
        <div className= ' my-5'>
        <button className="btn btn-danger mx-3">ChekOut </button>
        <button onClick={()=>{setCart("")}} className="btn btn-warning mx-3">Clear Cart </button>
        </div>
         )
        }
       </div>
      
    </>
  )
}

export default Cart