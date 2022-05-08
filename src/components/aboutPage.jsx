import React from 'react'
import AboutContent from './aboutContent'
import Image9 from '../assets/image9.png'
import aboutData from '../data/aboutData';

const AboutPage = () => {
  return (
    <div>
      <AboutContent Image9={Image9} data={aboutData} />
    </div>
  )
}

export default AboutPage