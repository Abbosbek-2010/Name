import React from 'react'
import "./Port_single.css"
import NavBar from '../../components/NavBar'
import frasm14 from '../../assets/frasm14.png'
import data from '../../assets/data.png'
import sabzi from '../../assets/sabzi.png'
import Footer from '../../components/Footer'
const Port_single = () => {
  return (
   <>
   <NavBar/>
   <div className='bolim10'>
    <img src={frasm14}/>
   </div>
   {/* section14 */}
   <div className='bolim14'>
   <div className='inside'>
     <div className='tut'>
      <h2 className='tag23'>Black Raspberry</h2>
      <p className='tag24'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
    </div>
    <div>
      <img src={data}/>
    </div>
   </div>
   </div>
   {/* text section */}
   <div className='bolim15'>
   <div>
    <h3 className='tag25'>About The Farm:</h3>
    <p className='tag26'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
    <p className='tag27'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
    <img src={sabzi}/>
    <h3 className='tag25'>How To Farm:</h3>
    <p className='tag26'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
    <p className='tag27'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
     <h3 className='tag25'>Conclusion:</h3>
    <p className='tag26'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
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

export default Port_single
