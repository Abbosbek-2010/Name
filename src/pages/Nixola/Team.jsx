import React from 'react'
import "./Team.css"
import human1 from '../../assets/human1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import woman from '../../assets/woman.png'
import woman1 from '../../assets/woman1.jpg'
import leaf from '../../assets/leaf.png'
import man from '../../assets/man.png'
import gul from '../../assets/gul.jpg'
import Footer from '../../components/Footer';


const Team = () => {
  return (
  <>
  <div className='bolim20'>
    <h1 className='tag1'>Our Team</h1>
  </div>
  {/* bolim21 */}
  <div className='bolim21'>
    <h4 className='font1'>Team</h4>
    <h1 className='font2'>Our Organic Experts</h1>
    <p className='font3'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
  </div>
  <div className='threewrapkard'>
  <div className='human'>
    <img src={human1}/>
  <div className='ikons'>
     <div> <h4>Giovani Bacardo</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
    <div className='human'>
    <img src={woman}/>
  <div className='ikons'>
     <div> <h4>Marianne Loreno</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
    <div className='human'>
    <img src={woman1}/>
  <div className='ikons'>
     <div> <h4>Giovani Bacardo</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
  </div>
  <div className='threewrapkard'>
  <div className='human'>
    <img src={gul}/>
  <div className='ikons'>
     <div> <h4>Keira Knightley</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
    <div className='human'>
    <img src={man}/>
  <div className='ikons'>
     <div> <h4>Scott Lawrence</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
    <div className='human'>
    <img src={leaf}/>
  <div className='ikons'>
     <div> <h4>Karen Allen</h4>
    <p>Farmer</p></div>
   <div>
     <FaFacebook fontSize={30} color='#274C5B' />
     <FaInstagramSquare fontSize={30} color='#274C5B' />
   </div>
  </div>
  </div>
  </div>
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
  </>
  )
}

export default Team
