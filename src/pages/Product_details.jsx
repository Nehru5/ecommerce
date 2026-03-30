import React from 'react'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Product_details = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`)
    .then(x=>{setProduct(x.data)})
    .catch(err=>console.log(err))
  },[])

  function billing_navigate(id){
      navigate(`/billing/${id}`)
  }
  return (
    <>
      <Nav/>

      <div>
        <img src={product.image} height={"300px"} alt="" />
        <h2>{product.name}</h2>
        <h2>Price: {product.price}</h2>
        <h2>Description: {product.description}</h2>
        <h2>Rating: ⭐{product.ratings}/5</h2>
        <button onClick={()=>{billing_navigate(product.id)}}>Buy</button>

      </div>
    </>
  )
}

export default Product_details