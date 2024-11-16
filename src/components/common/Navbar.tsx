import Image from 'next/image'
import React from 'react'
import tomato from '../../../public/tomato.png'
import Link from 'next/link'

type Props = {}

const Navbar = async(props: Props) => {
  return (
    <div className='w-full p-2 h-[4rem] border-none bg-black shadow-xl'>
      <div className='text-white flex items-center font-bold'><Link href="/"><Image src={tomato} className='h-10 w-10 ml-2 rounded-2xl' alt='tomato'></Image></Link>
      <div className='px-2 text-[20px]'>Automato</div>
       </div> 
    </div>
  )
}

export default Navbar