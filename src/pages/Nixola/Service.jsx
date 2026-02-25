import React from 'react'
import "./Service.css"
import ikon1 from '../../assets/ikon1.svg'
import ikon3 from '../../assets/ikon3.svg'
import ikon4 from '../../assets/ikon4.svg'
import frasm1 from '../../assets/frasm1.png'
import ikon5 from '../../assets/ikon5.png'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import { useNavigate } from 'react-router-dom'
import Single from './Single'

const Service = () => {
  let res1 = useNavigate()
  
  return (
   <>
   <NavBar/>
     <div className='bolim1'>
    <h1 className='tag1'>Services</h1>
     </div>
{/* setion2 */}
   <div className='bolim2'>
    <div className='two'>
      <div className='wrapkard'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
    <div className='wrapkard'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
    <div className='wrapkard'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
     </div>
    <div>
      <img src={frasm1}/>
    </div>
     <div className='two'>
      <div className='wrapkard1'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
    <div className='wrapkard1'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
    <div className='wrapkard1'>
      <img src={ikon1}/>
      <h4>Dairy Products</h4>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
    </div>
     </div>
    
   </div>
   {/* bolim3 */}
  <div className='bolim3'>
    <div className='wrapbolim3'>
     <h4 className='tag2'>Organic Only</h4>
     <h2 className='tag3'>Everyday Fresh & Clean</h2>
     <p className='tag4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
     <img src={ikon5}/> <br></br>
      <button className='mybutton' onClick={()=>res1("/single-service")}>explore more</button>
    </div>
  </div>
  <footer>
    <Footer/>
  </footer>
    </>
  )
}

export default Service
