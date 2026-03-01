import React from 'react'
import "./Licenses.css"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import lice1 from '../../assets/lice1.png'

const Licenses = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="lice-img">
        <img src={lice1} alt="License Image" className="lice-main-img" />
      </div>

      <div className="license-content">
  <div className="license-block">
    <h2>Icon & Graphics</h2>
    <p>
      Icons and Graphics are manually designed by the VictorFlow Templates team.
      You may download <br /> these and edit them to fit your website without asking
      for permission or providing credit.
    </p>
    <p>
      Upon purchasing Software UI Kit Template our team grants you a nonexclusive,
      worldwide  <br /> copyright license to download, copy, modify, and use the icons.
    </p>
  </div>

  <div className="license-block">
    <h2>Photography</h2>
    <p>
      All images used in the Organick Webflow Template are licensed for free
      personal and commercial <br /> use. If you'd like to use any specific image,
      you can check the licenses and download the images for <br /> free on Unsplash,
      Pexels and Freepik.
    </p>

    <div className="photo-links">
      <h3>Unsplash</h3>
      <p>
        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
        Image 8, Image 9, Image 10, Image <br />
         11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17 , Image 18, Image 19, Image 20,   <br /> Image 21, Image 22, Image 23, Image 24, Image 25
      </p>

      <h3>Pexel</h3>
      <p>
        Image 1, Image 2, Image 3, Image 4, Image 5, Image 6,
        Image 7, Image 8, Image 9, Image 9, Image 10, <br />
         Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17
      </p>
    </div>
  </div>

  <div className="license-block">
    <h2>Font</h2>
    <p>
      Organick template uses free licensed Google Fonts. Please check
      Roboto, Yellowtail <br /> and Open Sans.
    </p>
  </div>
</div>


    <section className='sect7'>
      <h1>Subscribe to <br /> our Newsletter </h1>
      <div className='inp'>
        <input type="text" placeholder='Your Email Address'/>
      <button>Subscirbe</button>
      </div>
    </section>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default Licenses
