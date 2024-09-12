import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { FaCartArrowDown } from 'react-icons/fa';


const Navbar = ({ setData , cart}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchItem, setSearchItem] = useState("")

  function filterByCateory(category) {
    const result = items.filter((data) => {
      return data.category === category;
    })

    setData(result);

  }
  function filterByPrice(price) {
    const result = items.filter((data) => {
      return data.price >= price;
    })

    setData(result);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`)

  }
  return (
    <>
      <header className='sticky-top'>
        <div className='nav-bar'>
          <Link to={"/"} className='brand'>E-cart</Link>
          <form onSubmit={handleSubmit} className='search-bar'>
            <input type='text' placeholder='Search Product' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />          </form>
          <Link to={"/cart"} className='cart'>
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{fontSize:'20px'}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>

        </div>
        {
          location.pathname == "/" &&(

          
        <div className='nav-bar-wrapper'>
          <div className='items'>Filter By{"->"}</div>
          <div onClick={() => setData(items)} className='items'> No Filter</div>
          <div onClick={() => filterByCateory("mobiles")} className='items'>Mobiles</div>
          <div onClick={() => filterByCateory("laptops")} className='items'>Laptops</div>
          <div onClick={() => filterByCateory("tablets")} className='items'>Tablets</div>
          <div onClick={() => filterByPrice(29999)} className='items'>{">=29999"}</div>
          <div onClick={() => filterByPrice(49999)} className='items'>{">=49999"}</div>
          <div onClick={() => filterByPrice(69999)} className='items'>{">=69999"}</div>
          <div onClick={() => filterByPrice(89999)} className='items'>{">=89999"}</div>
        </div>
        )
      }

      </header>

    </>
  )
}

export default Navbar