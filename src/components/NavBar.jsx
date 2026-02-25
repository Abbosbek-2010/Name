import React, { useState } from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../src/assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  let [modal, SetModal] = useState(false)
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
          <li><Link to="/portfolio">Projects</Link></li>
          <li><Link to="/Contact">News</Link></li>
        </ul>
        <div className="flex">

          <div className="search cart2"><CiSearch /></div>
          
          <div className='cart' id='id'>
            <div className="cart_one">
              <MdOutlineShoppingCart/>
            </div>
            <h2>Cart (0)</h2>
          </div>

          <FaBars className='bars' onClick={()=> SetModal(true)}/>
            {modal &&(
              <div className='modal'>
                <button onClick={()=> SetModal(false)}>Close ❌</button>
                <div className="modal_flex">
                  <ul>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/licenses'}>Licenses</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/service'}>Service</Link></li>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/team'}>Team</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/changelog'}>Changelog</Link></li>
                  </ul>
                </div>
              </div>
            )}


        </div>
      </nav>
    </div>
  )
}

export default NavBar
