import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function underConstruction() {
  return (
    <section className='bg-slate-900 h-screen flex flex-col items-center justify-center'>
      <Image src={"/static/images/image404.png"} className=' ' alt='404' width={700} height={700}/>

      <div className='mt-5 text-5xl'>
        Page is under construction...
      </div>
      <div className='mt-5 text-5xl'>
        Check back later
      </div>
      <Link href={"/"} className='p-3 px-5 rounded-xl text-3xl bg-orange-500 mt-5'> Go back</Link>
      </section>
  )
}

export default underConstruction;