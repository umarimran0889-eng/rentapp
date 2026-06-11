import React from 'react'
import Brands from '../../components/Brands'
import Hero from '../../components/hero'
import NewArrival from '../../components/NewArrival'
import Topselling from '../../components/Topselling'
import Browsebydesign from '../../components/Browsebydesign'

const HomePage = () => {
    return (
        <div>
           
    <Hero/>
    <Brands/>
    <NewArrival />
    <hr className="section-line"/>
    <Topselling  />
    <Browsebydesign />
  
        </div>
    )
}

export default HomePage
