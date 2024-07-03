import "./scss/Header.scss";
import Cart from "./Cart";
import { BsSearch } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState } from "react";
function Header() {
    const[scrolled,setScrolled] = useState(false);
    const[showCart,setShowCart] = useState(false);

    useEffect(()=>{
        function handleScroll(){
           
            const offset =window.scrollY;
            if(offset>100){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",handleScroll)
    },[])
  return (
    <>
    <div className={`header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="left">Srimany's</div>
      <div className="center">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Category</li>
        </ul>
      </div>
      <div className="right">
        <input className={`${scrolled ? 'bgcolorChanger' : ''}`} type="text" placeholder="Select Your Choose" />
        <BsSearch />

        <GrFavorite />
        <span className="cart-icon">
          <FiShoppingCart  onClick={()=>{setShowCart(true)}}/>
          <span>5</span>
        </span>
      </div>
    </div>
    {showCart && <Cart setShowCart={setShowCart}/>}
    </>
  );
}
export default Header;
