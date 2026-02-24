import React, { useState } from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import banana from "../../assets/Image21.png"
import yor from "../../assets/Group15.svg"
import yor2 from "../../assets/Group16.svg"
import loc from "../../assets/Location.png"
import axios from 'axios';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';


const Contact = () => {
  

  let [address, setAddress] = useState("")
    let [email, setEmail] = useState("")
    let [company, setCompany] = useState("")
    let [subject, setSubject] = useState("")
    let [message, setMessage] = useState("")


    function handleSubmit(e){
    e.preventDefault();
    

    axios.post("http://localhost:3001/contact", {
    address: address,
    email: email,
    company: company,
    subject: subject,
    message: message
   })
   .then(() => {
    setAddress("")
    setEmail("")
    setCompany("")
    setSubject("")
    setMessage("")
  })
}


  return (
    <div>
      <header className='head_one'>
      <NavBar/>


      <div className="bg-cont">
        <h1>Contact Us</h1>
      </div>
    </header>


    <section className='sect13'>
      <div>
        <img src={banana} alt="" className='banana'/>
      </div>
      <div>
        <h1>We'd love to talk about how we <br /> can work together.</h1>
        <p className='dummy'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br />  been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
        <div className='yor'>
          <div className='yor_div'><img src={yor} alt="" /></div>
          <div>
          <h4>Massege</h4>
          <p>support@organic.com</p>
        </div>
        </div>
        <div className='yor'>
          <div className='yor_div'><img src={yor2} alt="" /></div>
          <div>
          <h4>Contact Us</h4>
          <p>+01 123 456 789</p>
        </div>
        </div>
      </div>
    </section>


    <section className='sect14'>
      <div className='our'>
        <h3>Location</h3>
        <h1>Our Farms</h1>
        <p className='est'>Established fact that a reader will be distracted <br /> by the readable content of a page when looking <br /> a layout. The point of using.</p>
        <div className='loc'>
          <img src={loc} alt="" />
          <h4>New York, USA: <br /><span>299 Park Avenue New York, <br />New York 10171</span></h4>
        </div>
        <div className='loc'>
          <img src={loc} alt="" />
          <h4>London, UK: <br /> <span>30 Stamford Street, <br />London SE1 9LQ</span></h4>
        </div>
      </div>
    </section>


    <section className='sect15'>
      <form onSubmit={handleSubmit}>
        <div className='area'>
        <div className='mess'>
          <label htmlFor="">Full Name*</label>
          <input type="text" placeholder='Your Email Address' onChange={(e)=> setAddress(e.target.value)} value={address}/>
        </div>
        <div className='mess'>
          <label htmlFor="">Your Email**</label>
          <input type="text" placeholder='example@yourmail.com' onChange={(e)=> setEmail(e.target.value)} value={email}/>
        </div>
      </div>

      <div className='area'>
        <div className='mess'>
          <label htmlFor="">Company*</label>
          <input type="text" placeholder='yourcompany name here' onChange={(e)=> setCompany(e.target.value)} value={company}/>
        </div>
        <div className='mess'>
          <label htmlFor="">Subject*</label>
          <input type="text" placeholder='how can we help' onChange={(e)=> setSubject(e.target.value)} value={subject}/>
        </div>
      </div>
      <div className='mess mess2'>
        <label htmlFor="">Message*</label>
        <textarea placeholder='hello there,i would like to talk about how to...' onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
        <button>Send Message</button>
      </div>
      </form>
    </section>


    <section className='sect7 secd'>
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

export default Contact
