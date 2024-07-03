import React from 'react'
import './scss/SingleProduct.scss'
import RelatedProducts from './RelatedProducts.jsx'
import { FaShoppingCart } from "react-icons/fa";
import prod1 from './assets/pexels-pixabay-534172.jpg'
const SingleProduct = () => {
  return (
    <div className='singleProductMainContent'>
      <div className="layout">
        <div className="singleProductPage">
            <div className="left">
                <img src={prod1} alt="Product-image" />
            </div>
            <div className="right">
                <div className="productName">Name</div>
                <div className="productPrice">Price</div>
                <div className="productDescription">Description</div>
                <div className="cartButton">
                    <div className="quantityButton">
                        <div>-</div>
                        <div>5</div>
                        <div>+</div>
                    </div>
                    <button className='add-to-cart-button'>
                    <FaShoppingCart/>
                    Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <RelatedProducts/>
      </div>
    </div>
  )
}

export default SingleProduct
