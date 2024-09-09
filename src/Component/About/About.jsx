import React from 'react'
import HeroAbout from './Hero/Hero'
import About2 from './About/About'
import Story from './Story/Story'
import Mission from './Mission/Mission'
import MeetTeam from './Meet/Meet'
import SocialMedia from '../Home/SocialMedia/SocialMedia'

export default function About() {
  return (
    <div>
      <HeroAbout/>
      <About2/>
      <Story/>
      <Mission/>
      <MeetTeam/>
      <SocialMedia/>
    </div>
  )
}
