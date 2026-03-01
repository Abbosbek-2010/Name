import React from 'react'
import "./Changelog.css"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import changelog from "../../assets/changalog.png"
import changego from "../../assets/changego.png"

const Changelog = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="changalog">
        <img src={changelog} alt="Changelog" />
      </div>

      <div className="changego">
        <div className="changego-mini">
          <img src={changego} alt="Changego" />
          <h1>V.1<span>Initial Organick Webflow Template Release</span></h1>
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

export default Changelog
