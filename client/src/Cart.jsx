import React from "react";
import "./scss/Cart.scss";
import { IoMdClose } from "react-icons/io";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem";
const Cart = ({setShowCart}) => {
  return (
    <div className="cartPanel">
      <div className="opacLayer" onClick={()=>setShowCart(false)}></div>
      <div className="cartContent">        <div className="cartHeader">
          <span className="heading">Shoping Cart</span>
          <span className="closeBtn" onClick={()=>setShowCart(false)}>
            <IoMdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {/* <div className="emptyCart">
        <BsCartX />
        <div className="emptyCartText">No products in the cart</div>
        <button className="returnShop">Return to shop</button>
        </div> */}

        <CartItem/>
        <CartItem/>
        <CartItem/>
        <div className="cartFooter">
            <div className="subTotal">
                <span className="text">Subtotal:</span>
                <span className="textSubTotal">&#8377;1234</span>
            </div>
            <div className="CheckoutCTA">
                <button > Pay & Place order</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
