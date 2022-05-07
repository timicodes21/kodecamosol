import React from 'react'
import headingData from '../data/headingData'
import experienceData from '../data/experienceData'
import customersData from '../data/customersData'
import vendorsData from '../data/vendorsData'
import Heading from './heading'
import Homepage from './homePage'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Experience from './experience'
import Customers from './customers'
import Vendors from './vendors'

const LandingPage = () => {
  return (
    <div>
        <Heading data={headingData} />
        <Homepage Image1={Image1} />
        <Experience Image2={Image2} data={experienceData} />
        <Customers data={customersData} />
        <Vendors data={vendorsData} />
    </div>
  )
}

export default LandingPage