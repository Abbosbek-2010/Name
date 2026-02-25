import React from 'react'
import "./Shop.css"
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import P1 from '../../assets/Photo1.png'
import P2 from '../../assets/Photo2.png'
import P3 from '../../assets/Photo3.png'
import P4 from '../../assets/image13.png'
import P5 from '../../assets/image14.png'
import P6 from '../../assets/Photo4.png'
import P7 from '../../assets/Photo5.png'
import P8 from '../../assets/Photo6.png'
import { CiStar } from "react-icons/ci";
import follow from "../../assets/follow.png"
import bod from "../../assets/bodring.png.png"
import ps1 from '../../assets/PS1.png'
import ps2 from '../../assets/PS2.png'
import ps3 from '../../assets/PS3.png'
import NavBar from '../../components/NavBar';



let Cards = [
  {
    img: P1,
    name: 'Calabrese Broccoli',
    oldprice: '$20.00',
    price: '$13.00',
    btn: "Vegetable",
    id: 1
  },
  {
    img: P2,
    name: 'Fresh Banana Fruites',
    oldprice: '$20.00',
    price: '$14.00',
    btn: "Fresh",
    id: 2
  },
  {
    img: P3,
    name: 'White Nuts',
    oldprice: '$20.00',
    price: '$15.00',
    btn: "Millets",
    id: 3
  },
  {
    img: P4,
    name: 'Vegan Red Tomato',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Vegetable",
    id: 4
  },

  {
    img: P5,
    name: 'Mung Bean',
    oldprice: '$20.00',
    price: '$11.00',
    btn: "Health",
    id: 5
  },
  {
    img: P6,
    name: 'Brown Hazelnut',
    oldprice: '$20.00',
    price: '$12.00',
    btn: "Nuts",
    id: 6
  },
  {
    img: P7,
    name: 'Eggs',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Fresh",
    id: 7
  },
  {
    img: P8,
    name: 'Zelco Suji Elaichi Rusk',
    oldprice: '$20.00',
    price: '$15.00',
    btn: "Fresh",
    id: 8
  },


  {
    img: bod,
    name: 'Mung Bean',
    oldprice: '$20.00',
    price: '$11.00',
    btn: "Health",
    id: 9
  },
  {
    img: ps1,
    name: 'White Hazelnut',
    oldprice: '$20.00',
    price: '$12.00',
    btn: "Nuts",
    id: 10
  },
  {
    img: ps2,
    name: 'Fresh Corn',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Fresh",
    id: 11
  },
  {
    img: ps3,
    name: 'Organic Almonds',
    oldprice: '$20.00',
    price: '$15.00',
    btn: "Fresh",
    id: 12
  },
]

const Shop = () => {
  let navigate = useNavigate()
  return (
    <div>
      <header className='head_one'>
      <NavBar/>

      <div className="bg_shaftoli">
        <h1>Shop</h1>
      </div>
    </header>


    <section>
      <div className="box bor">
        {
              Cards.map((item, index)=> (
                <div key={index} className='card' onClick={()=> navigate(`/shop_single/${item.id}`)}>
                  <button>{item.btn}</button>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <hr className='hr'/>
                  <div className="pr">
                    <del className='old'><p className='old'>{item.oldprice}</p></del>
                    <p className='price'>{item.price}</p>
                    <div>
                      <CiStar className='stars'/>
                      <CiStar className='stars'/>
                      <CiStar className='stars'/>
                      <CiStar className='stars'/>
                      <CiStar className='stars'/>
                    </div>
                  </div>
                </div>
              ))
            }
      </div>
    </section>


    <section className='sect7'>
      <h1>Subscribe to <br /> our Newsletter </h1>
      <div className='inp'>
        <input type="text" placeholder='Your Email Address'/>
      <button>Subscirbe</button>
      </div>
    </section>


    <footer>
              <div className="footer">
                <div className='end'>
                <h2>Contact Us</h2>
                <h4>Email</h4>
                <p>needhelp@organia.com</p>
                <h4>Phone</h4>
                <p>666 888 888</p>
                <h4>Address</h4>
                <p>88 road, brooklyn street, USA</p>
              </div>
              <hr />
              <div className='center'>
                <div className="log">
                  <img src={Logo} alt="" />
                  <h1>Organick</h1>
                </div>
                <p>Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply dummy text of the printing </p>
                <img src={follow} alt="" className='follow'/>
              </div>
              <hr />
              <div className='start'>
                <h2>Utility Pages</h2>
                <p>Style Guide</p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
              </div>
              </div>
        
              <hr />
              <div className="copy">
                <p>Copyright © <span>Organick</span></p>
              </div>
            </footer>
    </div>
  )
}

export default Shop
