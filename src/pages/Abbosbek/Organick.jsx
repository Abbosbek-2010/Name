import React from 'react'
import "./Organick.css"
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Photo from '../../assets/PPP.png'
import org from '../../assets/VeganFood.png'
import org2 from "../../assets/Group2.png"
import P1 from '../../assets/Photo1.png'
import P2 from '../../assets/Photo2.png'
import P3 from '../../assets/Photo3.png'
import P4 from '../../assets/image13.png'
import P5 from '../../assets/image14.png'
import P6 from '../../assets/Photo4.png'
import P7 from '../../assets/Photo5.png'
import P8 from "../../assets/Photo6.png"
import prof from '../../assets/Photo1.png'
import P9 from '../../assets/Photo8.png'
import P10 from '../../assets/Photo9.png'
import P11 from '../../assets/Photo10.png'
import P12 from '../../assets/Photo1.png'
import dala from '../../assets/Image1.png'
import follow from '../../assets/Follow.png'

let Cards = [
  {
    img: P1,
    name: 'Calabrese Broccoli',
    oldprice: '$20.00',
    price: '$13.00',
    btn: "Vegetable"
  },
  {
    img: P2,
    name: 'Fresh Banana Fruites',
    oldprice: '$20.00',
    price: '$14.00',
    btn: "Fresh"
  },
  {
    img: P3,
    name: 'White Nuts',
    oldprice: '$20.00',
    price: '$15.00',
    btn: "Millets"
  },
  {
    img: P4,
    name: 'Vegan Red Tomato',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Vegetable"
  },

  {
    img: P5,
    name: 'Mung Bean',
    oldprice: '$20.00',
    price: '$11.00',
    btn: "Health"
  },
  {
    img: P6,
    name: 'Brown Hazelnut',
    oldprice: '$20.00',
    price: '$12.00',
    btn: "Nuts"
  },
  {
    img: P7,
    name: 'Eggs',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Fresh"
  },
  {
    img: P8,
    name: 'Zelco Suji Elaichi Rusk',
    oldprice: '$20.00',
    price: '$15.00',
    btn: "Fresh"
  },
]







let Cards2 = [
  {
    img: P9,
    name: 'Mung Bean',
    oldprice: '$20.00',
    price: '$11.00',
    btn: "Vegetable"
  },
  {
    img: P10,
    name: 'Brown Hazelnut',
    oldprice: '$20.00',
    price: '$12.00',
    btn: "Vegetable"
  },
  {
    img: P11,
    name: 'Onion',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Vegetable"
  },
  {
    img: P12,
    name: 'Cabbage',
    oldprice: '$20.00',
    price: '$17.00',
    btn: "Vegetable"
  }
]












const Organick = () => {
  return (

    <div>




    <header className='head_one'>
      <nav className='nav'>
        <Link to="/" className='lin'>
          <div className='flex'>
          <img src={Logo} alt="" className='logo'/>
        <h2 className='h2'>Organick</h2>
        </div>
        </Link>
        <ul className='ul' id='ull'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/*">Pages</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/*">Projects</Link></li>
          <li><Link to="/Contact">News</Link></li>
        </ul>
        <div className="flex">

          <div className="search cart2"><CiSearch /></div>
          
          <div className='cart'>
            <div className="cart_one">
              <MdOutlineShoppingCart/>
            </div>
            <h2>Cart (0)</h2>
          </div>


        </div>
      </nav>
    </header>

    
    <div className="back">
      <div className="pad">
        <h2>100% Natural Food</h2>
      <h1>Choose the best  <br /> healthier way <br /> of life</h1>
      <button>Explore Now →</button>
      </div>
    </div>



    <div className="mal">
      <div className="image">
        <div className="text">
          <h3>Natural!!</h3>
        <h1>Get Garden <br /> Fresh Fruits</h1>
        </div>
      </div>




      <div className="image2">
        <div className="text text2">
          <h3>Offer!</h3>
          <h1>Get 10% off <br /> on Vegetables</h1>
        </div>
      </div>
    </div>


    <div className="us">
      <div className="lime"><img src={Photo} alt="" className='lime'/></div>

      <div className="we">
        <h3 className='about'>About Us</h3>
        <h1 className='bel'>We Believe in Working <br /> Accredited Farmers</h1>
        <p className='len'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to  <br /> been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
        <div className="org org2">
          <img src={org} alt=""/>
          <div>
            <h3>Organic Foods Only</h3>
            <p>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
          </div>
        </div>
        <div className="org">
          <img src={org2} alt="" />
          <div>
            <h3>Organic Foods Only</h3>
            <p>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
          </div>
        </div>

        <button className='btn'>Shop Now →</button>
      </div>
    </div>

    <section className='sect1'>
      <div className="matn">
        <h3>Categories </h3>
      <h1>Our Products</h1>
      </div>

      <div className="box">
        {
      Cards.map((item, index)=> (
        <div key={index} className='card'>
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
      <button className='Load'>Load More   →</button>

    </section>


    <section>
      <div className="sect2">
        <h3 className='led'>Testimonial</h3>
        <h1>What Our Customer Saying?</h1>
        <img src={prof} alt="" />
        <div className='del'>
          <CiStar className='stars'/>
              <CiStar className='stars'/>
              <CiStar className='stars'/>
              <CiStar className='stars'/>
              <CiStar className='stars'/>
        </div>
        <p className='simply'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
        <h2 className='class'>Sara Taylor</h2>
        <p className='consumer'>Consumer</p>

        <hr className='nam'/>

        <div className="n">
          <div className="organic">
            <h1>100%</h1>
            <h3>Organic</h3>
          </div>
          <div className="organic">
            <h1>285</h1>
            <h3>Active Product</h3>
          </div>
          <div className="organic">
            <h1>350+</h1>
            <h3>Organic Orchads</h3>
          </div>
          <div className="organic  ss">
            <h1>25+</h1>
            <h3>Years of Farming</h3>
          </div>
        </div>
      </div>
    </section>

    <section className='sect3'>

      <div className="slesh">
        <div>
          <h3>Offer</h3>
        <h1>We Offer Organic For You</h1>
        </div>
        <div><button>View All Product →</button></div>
      </div>


      <div className="boxing">
        {
      Cards2.map((item, index)=> (
        <div key={index} className='card card2'>
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


    <section className='sect4'>
      <div>
        <img src={dala} alt="" className='dala'/>
      </div>
      <div className='dala_div'>
        <h3>Eco friendly</h3>
        <h1>Econis is a Friendly <br /> Organic Store</h1>
        <h4>Start with Our Company First</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
        <h4>Learn How to Grow Yourself</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br /> doloremque laudantium. Sed ut perspiciatis.</p>
        <h4>Farming Strategies of Today</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
      </div>
    </section>


    <section className='sect5'>
      <div className="dot1">
        <button>Organic Juice</button>
      </div>
      <div className="dot2">
        <button>Organic Food</button>
      </div>
      <div className="dot3">
        <button>Nuts Cookis</button>
      </div>
    </section>



    <section className='sect6'>
      <div className='news'>
        <div>
          <h3>News</h3>
          <h1>Discover weekly content about <br /> organic food, & more</h1>
        </div>
        <div>
          <button>More News →</button>
        </div>
      </div>

      <div className="more">
        <div className="M1">
          <div className="why">
            <p className='by'>By Rachi Card</p>
            <h4>The Benefits of Vitamin D & How to Get</h4>
            <p className='S'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
            <button>Read More →</button>
          </div>
        </div>


        
        <div className="M2">
          <div className="why">
            <p className='by'>By Rachi Card</p>
            <h4>The Benefits of Vitamin D & How to Get</h4>
            <p className='S'>Simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum</p>
            <button>Read More →</button>
          </div>
        </div>
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
        <div className='end' id='end'>
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
      <div className='start' id='start'>
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

export default Organick
