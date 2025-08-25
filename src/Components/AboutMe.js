import React from 'react'
import { AppText } from '../Constants'

const AboutMe = () => {
  return (
    <div>
      <div className='h-[300px] bg-purple-600 item-center w-full'>
        <h2 className='text-[50px] text-center font-bold text-white'>{AppText.About} <span className='text-black'>{AppText.Me}</span>  </h2>
        <h2 className='text-white mt-10'>{AppText.aboutMeDescripion}</h2>
      </div>
    </div>
  )
}

export default AboutMe