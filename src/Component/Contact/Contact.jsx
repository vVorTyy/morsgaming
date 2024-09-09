import React from 'react'
import ContactUs from './ContactUs/ContactUs'
import Massage from './Massage/Massage'
import SocialMedia from './SocialMedia/SocialMedia'
import ContactCard from './ContactCard/ContactCard'

export default function Contact() {
  return (
    <div>
      <ContactUs/>
      <Massage/>
      <ContactCard/>
      <SocialMedia/>
    </div>
  )
}
