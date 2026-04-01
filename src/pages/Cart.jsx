import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Nav from '../components/Nav'
const Cart = () => {
    const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/orders")
    .then((x)=>{setProducts(x.data)})
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <Nav/>
      {products.map((x)=>{
        return <div>
          <img src={x.productImage} height={"200px"} alt="" />
          <h2>{x.productName}</h2>
          <h2>{x.productPrice}</h2>
          <h2>Quantity: {x.productQuantity}</h2>
          <h2>Total: {x.totalPrice}</h2>
          <h2>Order date: {x.date}</h2>
        </div>
      })}
    </>
  )
}

export default Cart