import React from 'react'
import "./Portfolio.css"
import frasm7 from '../../assets/frasm7.png'
import frasm8 from '../../assets/frasm8.png'
import frasm9 from '../../assets/frasm9.png'
import frasm10 from '../../assets/frasm10.png'
import frasm11 from '../../assets/frasm11.png'
import frasm12 from '../../assets/frasm12.png'
import { useNavigate } from 'react-router-dom'
import Footer from  '../../components/Footer'
import NavBar from '../../components/NavBar'



const Portfolio = () => {
  let res2  = useNavigate()
  return (
    <>
    <NavBar/>
    <div className='bolim8'>
     <h1 className='tag1'>Portfolio Standard</h1>
    </div>
    {/* section9 */}
    <div className='bolim9'>
      <div className='threee'>
        <div className='navigate' onClick={()=>res2("/portfolio-single")}>
          <img src={frasm7}/>
          <h4 className='tag12'>Green & TastyLemon</h4>
          <h6 className='tag13'>Fruits</h6>
        </div>
        <div className='navigate'onClick={()=>res2("/carrot")} >
          <img src={frasm8}/>
          <h4 className='tag12'>Organic Carrot</h4>
          <h6 className='tag13'>Farmer</h6>
        </div>
        <div className='navigate' onClick={()=>res2("/rayhon")}>
          <img src={frasm9}/>
          <h4 className='tag12'>Organic Betel Leaf</h4>
          <h6 className='tag13'>fruits</h6>
        </div>
      </div>
       <div className='threee' onClick={()=>res2("/tomato")}>
        <div className='navigate'>
          <img src={frasm10}/>
          <h4 className='tag12'>Natural Tommato</h4>
          <h6 className='tag13'>Fruits</h6>
        </div>
        <div className='navigate'onClick={()=>res2("/portfolio-single")} >
          <img src={frasm11}/>
          <h4 className='tag12'>Black Raspberry</h4>
          <h6 className='tag13'>Farmer</h6>
        </div>
        <div className='navigate' onClick={()=>res2('/lemon')}>
          <img src={frasm12}/>
          <h4 className='tag12'>Honey Orange</h4>
          <h6 className='tag13'>Leaf</h6>
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

export default Portfolio
