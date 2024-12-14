"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsDiscord } from 'react-icons/bs';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { TfiAlignJustify } from 'react-icons/tfi';

function DocNav() {

    const [show_mobile_nav, set_show_mobile_nav] = useState(false);

    const toggle_Nav = ()=>{
        set_show_mobile_nav(prev => !prev);
    };
  return (
    <div>
        {/* Horizontal Nav  bar */}
        <div className='fixed w-full border-b border-b-slate-300 dark:border-b-slate-700 z-10 bg-white dark:bg-black py-3'>
   <div className='container mx-auto px-5 flex items-center justify-between'>
{/* Logo */}
<div className='flex items-center gap-3 '>
    <div className='xl:hidden text-xl mx-3 text-orange-400 p-2 bg-slate-900 cursor-pointer' onClick={toggle_Nav} >
      <TfiAlignJustify />  
    </div>

    <Image src="/static/images/gg.png" className='hidden xl:block' alt="Logo" width={30} height={30} />
    <div className='font-semibold text-2xl text-orange-500'>
      Gamegrid
    </div>
     </div>  
    </div>
        </div>


      {/* Desktop view */}
      <div className='fixed hidden xl:block h-screen w-96 border-r border-r-slate-300 dark:border-r-slate-700 overflow-y-scroll  pt-24 pl-5'>
        <div className='flex flex-col'>
            {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
            Welcome to GameGrid
            </div>
            <Link href={"/docs/welcome-to-gamegrid"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        👋 Introduction to Gamegrid</Link>
            <Link href={"/docs/welcome-to-gamegrid/why-gamegrid"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        💡 Why Gamegrid</Link>
            <Link href={"/docs/welcome-to-gamegrid/how-gamegrid-works"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        🕹️ How Gamegrid Works</Link>
      </div>

       {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
           Getting Started
            </div>
            <Link href={"/docs/getting-started/quick-steps"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       📪 Quick Steps</Link>
         
      </div>

        {/* section  */}
        <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
           Token
            </div>
            <Link href={"/docs/token"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       🪙 The $GRID Token</Link>
      </div>
       {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
       Governance
            </div>
            <Link href={"/docs/governance"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       ⚖️  Governance in Gamegrid</Link>
      </div>

         {/* section  */}
         <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
    Fees
            </div>
            <Link href={"/docs/fees"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       💸  Potential Fees</Link>
      </div>

      {/* section  */}
      <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
    FAQS
            </div>
            <Link href={"/docs/faqs"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       ❓   Questions and Answers</Link>
      </div>

        {/* section  */}
        <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
         Social and Technical Links
            </div>
            <div className='w-full'>
                    <div  className=' w-full py-3 px-4 text-slate-600 dark:text-slate-400'>   🌐 Socials </div>
                    <div className='pl-12 flex flex-col text-lg gap-2 w-full'>
                    <Link href={"https://x.com/GamegridFdn"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><FaXTwitter />  {"Twitter (X)"}</Link>
            <Link href={"https://discord.gg/ts84XbyH"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><BsDiscord /> {"Discord"}</Link>
            <Link href={"https://t.me/game_grid"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><FaTelegram />  {"Telegram"}</Link>

                    </div>
            </div>
      
            <Link href={"https://game-grid.gitbook.io/whitepaper"} target={"__blank"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       📄 Whitepaper </Link>
            {/* <Link href={"/docs/"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>      📜 Deck </Link> */}
  
      </div>
        </div>
        </div>

      {/* Mobile view */}
       { show_mobile_nav &&  <div className='fixed bg-white dark:bg-black xl:hidden h-screen w-full border-r border-r-slate-300 dark:border-r-slate-700 overflow-y-scroll  pt-24 pl-5'>
        <div className='flex flex-col'>
            {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
            Welcome to Gamegrid
            </div>
            <Link href={"/docs/welcome-to-gamegrid"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        👋 Introduction to Gamegrid</Link>
            <Link href={"/docs/welcome-to-gamegrid/why-gamegrid"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        💡 Why Gamegrid</Link>
            <Link href={"/docs/welcome-to-gamegrid/how-gamegrid-works"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>        🕹️ How Gamegrid Works</Link>
      </div>

       {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
           Getting Started
            </div>
            <Link href={"/docs/getting-started/quick-steps"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       📪 Quick Steps</Link>
           
      </div>


   {/* section  */}
       <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
       Token
            </div>
            <Link href={"/docs/token"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       🪙 The $GRID Token</Link>
      </div>

         {/* section  */}
         <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
       Governance
            </div>
            <Link href={"/docs/governance"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       ⚖️  Governance in Gamegrid</Link>
      </div>

         {/* section  */}
         <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
    Fees
            </div>
            <Link href={"/docs/fees"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       💸   Potential Fees</Link>
      </div>

      {/* section  */}
      <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
    FAQS
            </div>
            <Link href={"/docs/faqs"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>      ❓  Questions and Answers</Link>
      </div>



        {/* section  */}
        <div className='flex flex-col items-start justify-center mt-2'>
            <div className='font-bold'>
         Social and Technical Links
            </div>
            <div className='w-full'>
                    <div  className=' w-full py-3 px-4 text-slate-600 dark:text-slate-400'>   🌐 Socials </div>
                    <div className='pl-12 flex flex-col text-lg gap-2 w-full'>
                    <Link href={"https://x.com/GamegridFdn"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><FaXTwitter />  {"Twitter (X)"}</Link>
            <Link href={"https://discord.gg/ts84XbyH"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><BsDiscord /> {"Discord"}</Link>
            <Link href={"https://t.me/game_grid"} target="__blank" className="dark:text-slate-300 text-slate-600 hover:bg-slate-200  dark:hover:bg-slate-900 py-3 px-4 w-full flex gap-2 items-center"><FaTelegram />  {"Telegram"}</Link>

                    </div>
            </div>
            <Link href={"https://game-grid.gitbook.io/whitepaper"} target={"__blank"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>       📄 Whitepaper </Link>
            {/* <Link href={"/docs/"} className='hover:bg-slate-200 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-900 py-3 px-4 w-full'>      📜 Deck </Link> */}
         
      </div>
        </div>
        </div>}

    </div>
  
  )
}

export default DocNav;