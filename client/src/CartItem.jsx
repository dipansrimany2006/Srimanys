import React from 'react'
import './scss/CartItem.scss'
import prod from './assets/pexels-pixabay-534172.jpg'
import { IoMdClose } from "react-icons/io";
const CartItem = () => {
  return (
    <div>
      <div className="cartProducts">
        <div className="cartProduct">
          <div className="imgContainer">
            <img src={prod} alt="" />
          </div>
          <div className="prodDetails">
            <span className="name">product name</span>
            <IoMdClose className='closeBtn' />
            <div className="quantityButton">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>x</span>
              <span className='highlight'>&#8377;4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
