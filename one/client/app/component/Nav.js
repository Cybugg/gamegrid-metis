"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { TfiAlignJustify } from "react-icons/tfi";

function Nav() {
  const [showNet, setShowNet] = useState(false);

 const [showNav, setShowNav] = useState(false);

 const toggleNav = ()=>{

  setShowNav(prev => !prev)
 }

  const toggleButton = ()=>{
    setShowNet(prev => !prev)
  }


  return (
    <header className=' w-full  fixed px-5 self-center mt-5 top-0 text-white z-[9999999]' id='nav'>

    {/* Super Conatainer */}
    <div className='container mx-auto flex items-center justify-center gap-5'>
 {/* container */}
 <div className='lg:w-full flex items-center bg-slate-900 bg-opacity-30 lg:bg-opacity-70 justify-center   backdrop-blur-lg sm:px-10 p-5  rounded-full lg:border lg:border-orange-500'>

<nav className=' w-full flex justify-between items-center comon-padding '>
   <div className='flex items-center gap-3 '>
    <Image src="/static/images/gg.png" alt="Logo" width={30} height={30} />
    <div className='font-semibold text-xl  lg:text-2xl text-orange-500'>
      Gamegrid
    </div>
     </div>  

    <ul className=' items-center gap-7 max-sm:justify-center max-sm:flex-1 text-2xl font-bold hidden lg:flex'>
      <li className='cursor-pointer'>Home</li>
      <Link href={"/docs/welcome-to-gamegrid"} className='cursor-pointer'>Docs</Link>
      <Link href={"mailto:gamegridplay@gmail.com"} className='cursor-pointer'>Contact</Link>
      </ul>
   </nav>

</div>

{/* Button */}
<div className='relative'>
  <div className=' bg-orange-500 hover:bg-orange-600 font-bold text-lg lg:text-2xl  justify-center   backdrop-blur-lg sm:px-10 p-5  rounded-full border border-slate-900 cursor-pointer' onClick={toggleButton}>
  Play
</div>
{showNet &&<div className='absolute left-0 right-0 flex flex-col text-md text-center bg-slate-900 cursor-pointer'>
<div className='border p-2 hover:text-slate-900 hover:bg-white transition-all duration-100 ease-in'>
  <Link href={"https://6ckfl-piaaa-aaaaj-qncgq-cai.icp0.io/"}>
  Play on ICP 
  </Link>
</div>
<div className='border p-2 hover:text-slate-900 hover:bg-white transition-all duration-100 ease-in'>
<Link href={"/underConstruction"}>
Play on Skale
  </Link>
  
</div>
</div>}
</div>
{/* Button */}
<div className='relative lg:hidden'>
  <div className=' border bg-white bg-opacity-20  border-orange-500 font-bold text-2xl  justify-center   backdrop-blur-lg sm:px-10 p-5 rounded-full  cursor-pointer' onClick={toggleNav}>
  <TfiAlignJustify />
</div>
</div>
    </div>

   
   {showNav &&  <nav className=' flex-col h-screen w-full  bg-slate-900 bg-opacity-90 p-5 border-l-4 backdrop-blur-md border-l-orange-700  justify-between items-center common-padding '>
       <div className='flex items-center gap-3 self-start'>
        {/* <Image src="/static/Logo/logo_transparent.png" width={30} height={30} /> */}
         </div>  

        <ul className=' gap-7 max-sm:justify-center max-sm:flex-1 text-4xl font-bold flex flex-col '>
        <li className='cursor-pointer hover:bg-slate-900'>Home</li>
        <Link href={"/docs/welcome-to-gamegrid"} className='cursor-pointer'>Docs</Link>
        <Link href={"mailto:gamegridplay@gmail.com"} className='cursor-pointer'>Contact</Link>
       </ul>
       </nav>}
    </header>
  )
}

export default Nav;