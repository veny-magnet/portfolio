import React from 'react'
import { AppText } from '../Constants'
import { homeImage } from '../assets'

const Home = () => {
  return (
    <div className='mt-7 flex px-4 md:px-14 flex-col md:flex-row items-center'>
      <div>
          <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
          <h1 className='text-[40px] font-bold'>{AppText.Iam} <span className='text-purple-600'> {AppText.RahulSanap}</span></h1>
          <h1 className='text-gray-400 mt-3'>{AppText.aboutMeDescripion}</h1>
          <button className='bg-purple-600 text-white p-2 px-3 rounded-md mt-3 transition-all ease-in-out hover:scale-110'>Resume</button>
      </div>

      <img src={homeImage} className='md:w-[400px] w-[300px]'/>
    </div>
  )
}

export default Home