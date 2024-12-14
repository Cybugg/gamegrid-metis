import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="row-start-3 p-5 pb-24 flex gap-6 flex-wrap items-center justify-center">
    <Link
      className="flex items-center text-xl gap-2 hover:underline hover:underline-offset-4"
      href="/docs/welcome-to-gamegrid"
      target="_blank"
      rel="noopener noreferrer"
    >

     Docs
    </Link>
    <Link
      className="flex items-center text-xl gap-2 hover:underline hover:underline-offset-4"
      href="https://game-grid.gitbook.io/whitepaper"
      target="_blank"
      rel="noopener noreferrer"
    >
 
     Whitepaper
    </Link>
    <Link
      className="flex text-xl items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://game-grid.gitbook.io/whitepaper"
      target="_blank"
      rel="noopener noreferrer"
    >
 
      Join Waitlist →
    </Link>
  </footer>
  )
}

export default Footer