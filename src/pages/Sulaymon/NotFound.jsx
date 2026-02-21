import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import follow from '../../assets/Follow.png'

const NotFound = () => {
  return (
    <div>
      <header className='head_one'>
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
          <li><Link to="">Pages</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Projects</Link></li>
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


      <div className="backs">
        <h1 className='four'>404</h1>
        <h1 className='page'>Page not found</h1>
        <p>The page you are looking for doesn't exist or has been moved</p>
        <Link to='/'><button>Go to Homepage</button></Link>
      </div>
    </header>



    <footer>
          <div className="footer">
            <div className='end' id='end'>
            <h2>Contact Us</h2>
            <h4>Email</h4>
            <p>needhelp@organia.com</p>
            <h4>Phone</h4>
            <p>666 888 888</p>
            <h4>Address</h4>
            <p>88 road, brooklyn street, USA</p>
          </div>
          <hr />
          <div className='center'>
            <div className="log">
              <img src={Logo} alt="" />
              <h1>Organick</h1>
            </div>
            <p>Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply dummy text of the printing </p>
            <img src={follow} alt="" className='follow'/>
          </div>
          <hr />
          <div className='start' id='start'>
            <h2>Utility Pages</h2>
            <p>Style Guide</p>
            <p>404 Not Found</p>
            <p>Password Protected</p>
            <p>Licences</p>
            <p>Changelog</p>
          </div>
          </div>
    
          <hr />
          <div className="copy">
            <p>Copyright © <span>Organick</span></p>
          </div>
        </footer>
    </div>
  )
}

export default NotFound
