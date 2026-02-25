import React from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../src/assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='nav'>
        <Link to="/" className='lin'>
          <div className='flex'>
          <img src={Logo} alt="" className='logo'/>
        <h2 className='h2'>Organick</h2>
        </div>
        </Link>
        <ul className='ul' id='ull'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <select  onChange={(e) => navigate(e.target.value)}>
            <option  value={"/Pages"}>Pages</option>
            <option  value={"/service"}>Service</option>
            <option value={'/portfolio'}>Portfolio</option>
            <option value={'/team'}>Team</option>
            <option value={'/blog'}>Blog</option>
            <option value={'/contact'}>Contact</option>
            <option value={'/licenses'}>Licenses</option>
            <option value={'/changelog'}>Changelog</option>
            <option value={'/password'}>Password</option>
          </select>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/*">Projects</Link></li>
          <li><Link to="/Contact">News</Link></li>
        </ul>
        <div className="flex">

          <div className="search cart2"><CiSearch /></div>
          
          <div className='cart'>
            <div className="cart_one">
              <MdOutlineShoppingCart/>
            </div>
            <h2>Cart (0)</h2>
          </div>


        </div>
      </nav>
    </div>
  )
}

export default NavBar
