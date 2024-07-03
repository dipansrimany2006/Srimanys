import React from 'react'
import './scss/Products.scss'
import Product from './Product'
import './scss/Products.scss'
const Products = ({innerpage,headingText}) => {
  return (
    <div className='container'>
      { !innerpage && <div className="sec-heading">
        {headingText}
        <span></span>
      </div>}
      <div className="product-container">
      <Product name='Bed' price='$2341'/>
      <Product name='White Sofa' price='$120'/>
      <Product name='Orange Sofa' price='$200'/>
      <Product name='Black Sofa' price='$84'/>
      </div>
    </div>
  )
}

export default Products
