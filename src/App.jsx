import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Product_details from './pages/Product_details'
import Billing from './pages/Billing'
import Cart from './pages/Cart'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product_details/:id' element={<Product_details/>}/>
        <Route path='/billing/:id' element={<Billing/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App