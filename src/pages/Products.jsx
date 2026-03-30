import React from 'react'
import Nav from '../components/Nav'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get("http://localhost:3000/products")
      .then(x=>setProducts(x.data))
      .catch(err=>console.log(err))
  },[])

  function product_navigate(id){
    navigate(`/product_details/${id}`)
  }
  return (
    <>
    <Nav/>

    <center><h1 style={{backgroundColor:"orange", marginBottom:"30px", padding:"20px"}}>Products</h1></center>
    <div className="products-list">
      {products.map((x)=>{
      return <div className='product-data'>
        <img src={x.image} alt="" height={"200px"} />
        <h3>{x.name}</h3>
        <button onClick={()=>{product_navigate(x.id)}}>View Product</button>
      </div>
    })}

    </div>

    </>
  )
}

export default Products