import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='w-full h-[7vw] absolute top-0 flex items-center justify-between z-40 mt-4'>
        <Link href="/"><h1 className='text-[3.5vw] font-bold font-mono ml-6'>Animex</h1></Link>
        <div className='flex items-center gap-8 text-md font-semibold max-sm:hidden'>
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/latest">Latest</Link>
            <Link href="/genre">Genre</Link>
            
        </div>
        <div className='mr-5'>
            <Link href="/form">
                <button className='text-[2vw] font-bold bg-orange-400 px-3 py-2 rounded-md'>Let's Connect</button>
            </Link>
        </div>
    </nav>
  )
}

export default Header