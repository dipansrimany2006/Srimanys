import React from 'react'
import './scss/Product.scss'
import prod from './assets/pexels-martinpechy-1866149.jpg'
const Product = (props) => {
  return (
    <div className='product'>
      <img src={prod} alt="" />
      <div className="product-details">
      <span className="product-name">{props.name}</span>
      <div className="product-price">{props.price}</div>
      </div>
      <div className='button2'><button className='addtocart'>Add to Cart</button></div>
    </div>
  )
}

export default Product
