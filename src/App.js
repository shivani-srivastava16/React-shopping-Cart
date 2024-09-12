import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './components/ProductDetailPage';
import Cart from './components/Cart';
import SearchProductPage from './components/SearchProductPage';
import { items } from './components/Data';
import { useState } from 'react';
 

function App() {
  const [data,setData] = useState([...items])
  const [cart,setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path='/' element ={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path='/product/:id' element ={<ProductDetailPage cart={cart} setCart={setCart}/>}/>
        <Route path='/search/:term' element ={<SearchProductPage cart={cart} setCart={setCart}/>}/>
        <Route path='/Cart' element ={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
