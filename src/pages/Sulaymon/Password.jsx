import React from 'react'
import "./Password.css"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import password from "../../assets/password.png"
import gul from "../../assets/gul.png"

const Password = () => {
  return (
    <>

      <div className="navbar">
        <NavBar />
      </div>

      <div className="changalog">
        <img src={password} alt="password" />
      </div>

<div className="pas-bag">
  
      <div className="Password">
        <div className="pass-img">
          <img src={gul} alt="gul" />
        </div>
        <div className="pass-test">
          <h3>Password</h3>
          <input type="password" placeholder="Enter your password" /> <br />
          <button type='submit'>Send Now </button>
        </div>
      </div>
</div>




      <section className='sect7'>
        <h1>Subscribe to <br /> our Newsletter </h1>
        <div className='inp'>
          <input type="text" placeholder='Your Email Address' />
          <button>Subscirbe</button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Password
