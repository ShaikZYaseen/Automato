import React from 'react'
import { BackgroundBeams } from './ui/BackgroundBeams'
import tomato from "../../../public/tomato.png"
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='text-white h-full w-screen flex-col  items-center justify-between'>
      <div><p>Automate your workflow</p>
      <div className='flex'>with <Image src={tomato} className='h-10 w-10 ml-2 rounded-2xl' alt='tomato'></Image></div>
      </div>
    <BackgroundBeams/>
    </div>
  )
}

export default Hero