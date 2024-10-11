import React from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='total-header-box'>
        <div className='header-box'>
            <h1>SPOTSTAR</h1>
        </div>

        <div className='navbar'>
            <Link  to='/Home'>Home</Link>
            <Link  to='/MusicHome'>Music</Link>
            <Link  to='/VideoHome'>Movie</Link>
            <Link  to='/Login'>Logout</Link>
        </div>
    </div>
  )
}

export default Header