import React from 'react'
import '../scss/Categorypage.scss'
import Products from '../Products'
const Categorypage = () => {
  return (
    <div className='categoryMaincontent'>
      <div className="layout">
        <div className="categoryTitle">
            Category Title
        </div>
        <Products innerpage={true}/>
      </div>
    </div>
  )
}

export default Categorypage
