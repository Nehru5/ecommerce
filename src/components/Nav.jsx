import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="left">
          <h2>Cartify</h2>
        </div>
        <div className="right">
          <Link className='link' to={"/products"}><h2>Products</h2></Link>
          <h2>Cart</h2>
        </div>
      </div>
    </>
  )
}

export default Nav