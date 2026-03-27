import React from 'react'
import Nav from "../components/Nav"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  function handleProducts(){
    navigate("/products")
  }
  return (
    <>
    <Nav/>
      <div className="hero-section">
        <h2>Welcome to Cartify</h2>
        <button onClick={handleProducts}>Shop now</button>
      </div>
    <center><h1>Products</h1></center>
      <div className="products">
        <img src="https://www.tpupolymer.com/js/htmledit/kindeditor/attached/20220729/20220729181358_47088.jpg" alt="" />
        <img src="https://mzfoodtest.com/wp-content/uploads/2022/06/dairy-products.jpg" alt="" />
        <img src="https://www.news-medical.net/images/Article_Images/ImageForArticle_14459_1718253799749257.jpg" alt="" />
      </div>

      <div className="products">
        <img src="https://www.tpupolymer.com/js/htmledit/kindeditor/attached/20220729/20220729181358_47088.jpg" alt="" />
        <img src="https://mzfoodtest.com/wp-content/uploads/2022/06/dairy-products.jpg" alt="" />
        <img src="https://www.news-medical.net/images/Article_Images/ImageForArticle_14459_1718253799749257.jpg" alt="" />
      </div>
      <Footer/>
    </>
  )
}

export default Home