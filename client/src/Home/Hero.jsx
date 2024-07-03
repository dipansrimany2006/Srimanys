import furniture from "../assets/pexels-kamo11235-667838.jpg"
import Category from "./category/Category.jsx";
import OfferCard from "./OfferCard.jsx";
import '../scss/Hero.scss';
function Hero(){
   return <div className="hero">
    <div className="left">
        <div className="banner-text">
            Modern Furniture
        </div>
        <img src={furniture} alt="" />
    </div>
    <div className="right">
        <Category/>
        <div className="ad">
            <div className="offers">
                Exclusive offers
            </div>
            <OfferCard percentage='50%'/>
            <OfferCard percentage='75%'/>
        </div>
    </div>
   </div> 
}
export default Hero;