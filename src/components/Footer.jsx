import React from 'react'
import './Footer.css'
import Logo from '../../src/assets/Logo.png'
import follow from '../../src/assets/Follow.png'


const Footer = () => {
  return (
    <div>
      <div className="footer">
                  <div className='end'>
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
                <div className='start'>
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
    </div>
  )
}

export default Footer
