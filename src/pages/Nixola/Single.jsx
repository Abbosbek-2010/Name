import React from 'react'
import "./Single.css"
import NavBar from '../../components/NavBar'
import frasm4 from '../../assets/frasm4.png'
import frasm5 from '../../assets/frasm5.png'
import photo12 from '../../assets/12.png'
import Footer from '../../components/Footer'

const Single = () => {
  return (
   <>
   <NavBar/>
   <div className='bolim5'>
    <h1 className='tag7'>Quality Standard</h1>
   </div>
   {/* section2 */}
   <div className='bolim6'>
    <div className='wrapbolim6'>
      <h1 className='tag9'>Organic Store Services</h1>
      <p className='tag10'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
      <p className='tag11'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
       <div className='twowrapkard'>
      <div><img src={frasm4}/></div>
      <div className='kard10'>
        <h4 className='tag8'>Why Organic</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
      </div>
      
    </div>
     <div className='twowrapkard'>
      <div className='kard10'>
        <h4 className='tag8'>Speciality Produce</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
      </div>
       <div><img src={frasm5}/></div>
    </div>
    <h1 className='tag9'>We farm your land</h1>
    <div className='twowrap'>
      <div className='border'>
        <div>
          <img src={photo12}/>
        </div>
        <div>
          <h4>Best quality support</h4>
        </div>
      </div>
    </div>
     <div className='twowrap'>
      <div className='border'>
        <div>
          <img src={photo12}/>
        </div>
        <div>
          <h4>Best quality support</h4>
        </div>
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

export default Single
