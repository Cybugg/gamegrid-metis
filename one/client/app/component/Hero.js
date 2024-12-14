import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Hero() {
  return (
    <section className='w-full min-h-screen relative'>
      <div className='bg-slate-900'>
         <Image src={'/static/images/background.png'}  alt='backgorund' className='h-full opacity-100 dark:opacity-80 left-0 w-full absolute z-[-10] top-0 object-cover blur-md' width={500} height={500}/>
      </div>
     

      {/* hero container items */}
      <div className='flex flex-col 2xl:flex-row pt-32 items-start justify-center h-full gap-12 p-5  z-[9] '>
        {/* Item1 */}
        <div className='max-w-[50rem]'>
          {/* Main text */}
        <div className='font-bold text-orange-500 dark:text-orange-200 text-5xl sm:text-7xl lg:text-8xl py-5 lg:mt-12'>
        Who Shall Become the Ultimate Hero?
        </div>
        {/* Paragraph */}
        <div className='text-2xl text-slate-100 dark:text-white'>
          Earn $Grid tokens by staking and defeating oppositions in competitive Games, trading and through rewards.
        </div>
      {/* CTA Buttons */}
      <div className='flex  gap-12 my-12'>
      <div className='bg-orange-500 dark:bg-orange-700 text-2xl font-bold p-2 px-5 rounded cursor-pointer text-white'>
      Join Waitlist
      </div>
      <Link href={"/docs/welcome-to-gamegrid"} className='border bg-slate-100 bg-opacity-20  border-orange-600 darkborder-orange-600 text-2xl font-bold p-2 px-5 rounded cursor-pointer text-white'>
      Learn More
      </Link>
      </div>

       </div>

        {/* Item2 */}
        <div>
      <Image src={"/static/images/hero_characters.png"} width={950} height={1000} alt='Heroes image' className='z-[99999]  '/>
        </div>
        
      </div>

      
        </section>
  )
}

export default Hero;