import React from 'react'
import CarsSection from './ChooseCar'
import Facts from './Facts'
import HeroSection from './Hero'
import HeroCar from './HeroCar'
import MobileSection from './Mobileapp'
import Companionship from './Companionship'

const Homepage = () => {
    return (
        <div>
            <HeroSection/>
            <HeroCar/>
            <CarsSection/>
            <Facts/>
            <MobileSection/>
            <Companionship/>

            
        </div>
    )
}

export default Homepage
