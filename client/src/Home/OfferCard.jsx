
import '../scss/OfferCard.scss'
function OfferCard(props){
    return<div className="OfferCard">
        <div className="small-text">upto</div>
        <div className="big-text">
            {props.percentage} Off
        </div>
        <div className="middle-text">Shop Now & Save</div>
    </div>
}
export default OfferCard;