import React from 'react'
import "./Blog.css"
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { Cards } from "../../data/Cards";

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className='blog-container'>
        <div className="blog-container-mini">
          <h1>Recent News</h1>
        </div>
      </div>

      <div className="blog-cards">
        {Cards.map((card) => (
          <Link
            to={`/blog/${card.id}`}
            key={card.id}
            className="blog-link"
          >
            <div className="blog-card">
              <img src={card.img} alt={card.title} className="blog-card-img" />
              <div className="blog-card-content">
                <h2>{card.title}</h2>
                <p className="blog-card-date">{card.date}</p>
                <p className="blog-card-author">{card.author}</p>
                <p className="blog-card-description">{card.description}</p>
                <button className="blog-card-button">{card.button}</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className='sect7'>
        <h1>Subscribe to <br /> our Newsletter </h1>
        <div className='inp'>
          <input type="text" placeholder='Your Email Address'/>
          <button>Subscribe</button>
        </div>
      </section>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Blog