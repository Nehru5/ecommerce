import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'

const Billing = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})

  const [quantity, setQuantity] = useState(1)
  function increment(){
    setQuantity(quantity+1)
  }
  function decrement(){
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>setProduct(x.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <>
    <Nav/>
      <div>
        <div>
          <h3>{product.name}</h3>
          <img src={product.image} height={"200px"} alt="" />
          <h3>Price:{product.price}</h3>
          <h2>Quantity: </h2>
          <button onClick={decrement}>-</button>
          <h3>{quantity}</h3>
          <button onClick={increment}>+</button>
          <h4>Total price: {quantity*product.price}</h4>
        </div>
        <div>
          <form action="">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Order</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Billing