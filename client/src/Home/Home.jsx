import React from 'react'
import Hero from './Hero.jsx';
import Products from '../Products.jsx'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Products headingText='All Products'/>
    </div>
  )
}

export default Home
