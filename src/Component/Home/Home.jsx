import "./Home.css";

import React from 'react'
import About from './About/About'
import Hero from './Hero/Hero'
import Matches from './Matches/Matches'
import Meet from './Meet/Meet'
import Articales from './Articales/Articales'
import Contact from './Contact/Contact'
import Games from './Games/Games'
import SocialMedia from './SocialMedia/SocialMedia'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Matches/>
      <Meet/>
      <Articales/>
      <Contact/>
      <Games/>
      <SocialMedia/>
    </div>
  )
}
