import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to='/Aboutus'>About Us</Link>
        </li>
        <li><Link to='/Product'>Products</Link></li>
        <li><Link to='/Contact'>Contact us</Link></li>
      </ul>
    </div>
  )
}
