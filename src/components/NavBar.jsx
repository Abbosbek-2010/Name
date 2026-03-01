import React, { useState } from 'react'
import './NavBar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from "../../src/assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let [modal, SetModal] = useState(false);

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.toLowerCase() === path.toLowerCase() || pathname.startsWith(path + '/');
  };

  const pagesPaths = ['/service', '/portfolio', '/team', '/blog', '/contact', '/licenses', '/changelog', '/password'];
  const currentPageValue = pagesPaths.find(p => pathname.toLowerCase().startsWith(p)) || '/Pages';

  return (
    <div>
      <nav className='nav'>
        <Link to="/" className={'lin' + (pathname === '/' ? ' nav_active' : '')}>
          <div className='flex'>
          <img src={Logo} alt="" className='logo'/>
        <h2 className='h2'>Organick</h2>
        </div>
        </Link>
        <ul className='ul' id='ull'>
          <li><Link to="/" className={isActive('/') ? 'nav_active' : ''}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'nav_active' : ''}>About</Link></li>
          <select value={currentPageValue} onChange={(e) => navigate(e.target.value)}>
            <option value="/Pages">Pages</option>
            <option value="/service">Service</option>
            <option value="/portfolio">Portfolio</option>
            <option value="/team">Team</option>
            <option value="/blog">Blog</option>
            <option value="/contact">Contact</option>
            <option value="/licenses">Licenses</option>
            <option value="/changelog">Changelog</option>
            <option value="/password">Password</option>
          </select>
          <li><Link to="/shop" className={isActive('/shop') ? 'nav_active' : ''}>Shop</Link></li>
          <li><Link to="/portfolio" className={isActive('/portfolio') ? 'nav_active' : ''}>Projects</Link></li>
          <li><Link to="/Contact" className={isActive('/Contact') || isActive('/contact') ? 'nav_active' : ''}>News</Link></li>
        </ul>
        <div className="flex">

          <div className="search cart2"><CiSearch /></div>
          
          <div className='cart' id='id'>
            <div className="cart_one">
              <MdOutlineShoppingCart/>
            </div>
            <h2>Cart (0)</h2>
          </div>

          <FaBars className='bars' onClick={()=> SetModal(true)} aria-label="Menyu"/>
            {modal && (
              <div className='modal'>
                <button type="button" className='modal_close' onClick={()=> SetModal(false)}>Yopish ✕</button>
                <div className="modal_flex">
                  <ul className="modal_list">
                    <li><Link to="/" onClick={()=> SetModal(false)} className={isActive('/') ? 'nav_active' : ''}>Home</Link></li>
                    <li><Link to="/about" onClick={()=> SetModal(false)} className={isActive('/about') ? 'nav_active' : ''}>About</Link></li>
                    <li className="modal_pages_title">Pages</li>
                    <li><Link to="/service" onClick={()=> SetModal(false)} className={isActive('/service') ? 'nav_active' : ''}>Service</Link></li>
                    <li><Link to="/portfolio" onClick={()=> SetModal(false)} className={isActive('/portfolio') ? 'nav_active' : ''}>Portfolio</Link></li>
                    <li><Link to="/team" onClick={()=> SetModal(false)} className={isActive('/team') ? 'nav_active' : ''}>Team</Link></li>
                    <li><Link to="/blog" onClick={()=> SetModal(false)} className={isActive('/blog') ? 'nav_active' : ''}>Blog</Link></li>
                    <li><Link to="/contact" onClick={()=> SetModal(false)} className={isActive('/contact') ? 'nav_active' : ''}>Contact</Link></li>
                    <li><Link to="/licenses" onClick={()=> SetModal(false)} className={isActive('/licenses') ? 'nav_active' : ''}>Licenses</Link></li>
                    <li><Link to="/changelog" onClick={()=> SetModal(false)} className={isActive('/changelog') ? 'nav_active' : ''}>Changelog</Link></li>
                    <li><Link to="/password" onClick={()=> SetModal(false)} className={isActive('/password') ? 'nav_active' : ''}>Password</Link></li>
                    <li><Link to="/shop" onClick={()=> SetModal(false)} className={isActive('/shop') ? 'nav_active' : ''}>Shop</Link></li>
                    <li><Link to="/portfolio" onClick={()=> SetModal(false)} className={isActive('/portfolio') ? 'nav_active' : ''}>Projects</Link></li>
                    <li><Link to="/Contact" onClick={()=> SetModal(false)} className={isActive('/Contact') || isActive('/contact') ? 'nav_active' : ''}>News</Link></li>
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
