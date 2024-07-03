import '../../scss/Category.scss';
import Button from "./Button.jsx";
function Category(){
    return<div className="category">
    <div className="category-title">Shop Our Curated Collection</div>
    <div className="category-buttons">
        <Button name='Sofas'/>
        <Button name='Arm Chairs'/>
        <Button name='Cofee Table'/>
        <Button name='Night Stand'/>
        <Button name='Dining Table'/>
        
    </div>
</div>
}

export default Category;