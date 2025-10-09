import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="text-2xl font-bold tracking-tighter transition-all">
        <p className='hidden lg:block'>TATO
            <span className="text-cyan-600">RESILIENT</span>
        </p>
        <p className='flex text-4xl lg:hidden'>
            <span className='-skew-x-6'>T</span>
            <span className='text-cyan-600 skew-x-6'>R</span>
        </p>
    </Link>
  )
}

export default Logo