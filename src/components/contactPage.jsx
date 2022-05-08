import React, { useState } from 'react'
import ContactForm from './contactForm'
import Footer from './footer'
import Image16 from '../assets/image16.png'
import footerData from '../data/footerData';

const ContactPage = () => {
  const [display, setDisplay] = useState(false);
    const [show, setShow] = useState(true)
    const [image, setImage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [story, setStory] = useState('')
    const [category, setCategory] = useState('customer')
    const [city, setCity] = useState('');

  return (
    <div>
      <ContactForm image={image} setImage={setImage} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} story={story} setStory={setStory} category={category} setCategory={setCategory} city={city} setCity={setCity} display={display} setDisplay={setDisplay} show={show} setShow={setShow} />
      <Footer Image16={Image16} data={footerData} />
    </div>
  )
}

export default ContactPage