import React from 'react'
import './About.css'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import nine from '../../assets/Image9.png'
import icon1 from '../../assets/Icon.svg'
import icon2 from '../../assets/Icon1.svg'
import ten from "../../assets/image10.png"
import icon_three from "../../assets/Icon3.svg"
import fors from "../../assets/Icon4.svg"
import fives from "../../assets/Icon5.svg"
import sixss from "../../assets/Icon6.svg"
import id1 from "../../assets/Image11.png"
import id2 from "../../assets/Image12.png"
import id3 from "../../assets/Image13.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import nuts from "../../assets/Image14.png"
import nuts1 from "../../assets/Image15.png"
import nuts2 from "../../assets/Image16.png"
import follow from "../../assets/follow.png"
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';


const About = () => {
  return (
    <div>
      <header className='head_one'>
      <NavBar/>


      <div className="bg-about">
        <h1>About Us</h1>
      </div>
    </header>


    <section className='sect8' id='sect8'>
      <div>
        <img src={nine} alt="" className='nine'/>
      </div>
      <div>
        <h3>About Us</h3>
        <h1>We do Cerative <br /> Things for Succes</h1>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased <br /> to been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley.</p>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased <br /> to been the industry's standard dummy text ever since the 1500s, when an <br /> unknown printer took a galley.</p>

        <div className='traktor'>
          <div>
            <img src={icon1} alt="" />
            <p>Modern Agriculture <br /> Equipment </p>
          </div>


          <div>
            <img src={icon2} alt="" />
            <p>No growth <br /> hormones are used</p>
          </div>
        </div>
        <button className='C'>Explore More →</button>

      </div>
    </section>



    <section className='sectional'>
      <div className="sect9">
        <div>
        <h3>Why Choose us?</h3>
        <h1>We do not buy from the <br /> open market & traders.</h1>
        <p className='regular'>Simply dummy text of the printing and typesetting industry. Lorem had ceased <br /> to been the industry's standard  the 1500s, when an unknown</p>
        <div className='red'>
          <p>100% Natural Product</p>
        </div>
        <p className='padding'>Simply dummy text of the printing and typesetting <br /> industry Lorem Ipsum</p>
        <div className='red'>
          <p> Increases resistance</p>
        </div>
        <p className='padding'>Filling, and temptingly healthy, our Biona Organic <br /> Granola with Wild Berries is just the thing</p>
      </div>
      <div>
        <img src={ten} alt="" />
      </div>
      </div>

      <div className="return">
        <div className='return_div'>
          <div className='img_div'>
            <img src={icon_three} alt="" />
          </div>
          <h3>Return Policy</h3>
          <p>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
        </div>
        <div className='return_div'>
          <div className='img_div'>
            <img src={fors} alt="" />
          </div>
          <h3>100% Fresh</h3>
          <p>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
        </div>
        <div className='return_div'>
          <div className='img_div'>
            <img src={fives} alt="" />
          </div>
          <h3>Support 24/7</h3>
          <p>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
        </div>
        <div className='return_div'>
          <div className='img_div'>
            <img src={sixss} alt="" />
          </div>
          <h3>Secured Payment</h3>
          <p>Simply dummy text of <br /> the printintypesetting <br /> industry.</p>
        </div>
      </div>
    </section>


    <section className='sect10'>
      <h3 className='team'>Team</h3>
      <h1 className='expert'>Our Organic Experts</h1>
      <p className='of'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

      <div className='src'>


        <div className='boxer'>
          <img src={id1} alt="" />
          <div className="id">
            <div>
            <h4>Giovani Bacardo</h4>
            <p>Farmer</p>
          </div>
          <div className='face'>
            <FaFacebook />
            <FaTwitter />
          </div>
          </div>
        </div>
        <div className='boxer boxer2'>
          <img src={id2} alt="" />
          <div className="id">
            <div>
            <h4>Giovani Bacardo</h4>
            <p>Farmer</p>
          </div>
          <div className='face'>
            <FaFacebook />
            <FaTwitter />
          </div>
          </div>
        </div>
        <div className='boxer'>
          <img src={id3} alt="" />
          <div className="id">
            <div>
            <h4>Giovani Bacardo</h4>
            <p>Farmer</p>
          </div>
          <div className='face'>
            <FaFacebook />
            <FaTwitter />
          </div>
          </div>
        </div>



      </div>
    </section>



    <section className='sect11'>
      <h3>About Us</h3>
      <h1>What We Offer for You</h1>

      <div className='you'>


        <div className="tube">
          <div>
          <img src={nuts} alt="" />
          <p>Spicy</p>
        </div>
        <div>
          <img src={nuts1} alt="" />
          <p>Nuts & Feesd</p>
        </div>
        <div>
          <img src={nuts2} alt="" />
          <p>Fruits</p>
        </div>
        <div>
          <img src={nuts} alt=""/>
          <p>Vegetable</p>
        </div>
        </div>


      </div>
    </section>


    <section className='sect12'>
      <h1>Subscribe to <br /> our Newsletter </h1>
      <div className='inp'>
        <input type="text" placeholder='Your Email Address'/>
      <button>Subscirbe</button>
      </div>
    </section>



    <footer>
          <Footer/>
        </footer>




    </div>
  )
}

export default About
