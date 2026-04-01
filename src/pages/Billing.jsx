import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { toast } from 'react-toastify'


const Billing = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [address, setAdrress] = useState("")

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

  function placeOrder(e){
        e.preventDefault()
        let order = {
          productId:product.id,
          productName:product.name,
          productPrice:product.price,
          productQuantity:quantity,
          totalPrice:product.price*quantity,
          productImage:product.image,
          productRatings:product.ratings,
          customer:{
            name:name,
            email:email,
            phone:phone,
            address:address
          },
          date:new Date().toLocaleDateString(),
          status:"Pending"
        }

        axios.post("http://localhost:3000/orders",order)
        .then(()=>{
          setName("")
          setEmail("")
          setPhone("")
          setAdrress("")
          toast.success("🎉Order placed🎉")
          navigate("/products")
        })
        .catch(err=>{
          toast.error("Failed")
        })
  }
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
          <form action="" onSubmit={placeOrder}>
            <input type="text" placeholder='Enter name' required value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='enter email' required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" placeholder='Enter phone' required value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            <input type="text" placeholder='Enter address' required value={address} onChange={(e)=>{setAdrress(e.target.value)}} />
            <button>Order</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Billing