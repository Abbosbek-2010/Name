import React from 'react'
import "./NotFound.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import follow from '../../assets/Follow.png'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const NotFound = () => {
  return (
    <div>
      <header className='head_one'>
      <NavBar/>


      <div className="backs">
        <h1 className='four'>404</h1>
        <h1 className='page'>Page not found</h1>
        <p>The page you are looking for doesn't exist or has been moved</p>
        <Link to='/'><button>Go to Homepage</button></Link>
      </div>
    </header>



    <footer>
        <Footer/>
        </footer>
    </div>
  )
}

export default NotFound
