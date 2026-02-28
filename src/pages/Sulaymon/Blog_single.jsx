import React from "react";
import NavBar from '../../components/NavBar'
import { useParams } from "react-router-dom";
import { Cards } from "../../data/Cards";
import Footer from '../../components/Footer'
import "./Blog_single.css";

const Blog_single = () => {
  const { id } = useParams();
  const card = Cards.find((c) => c.id === parseInt(id));

  if (!card) return <div>Post topilmadi</div>;

  return (
<>
  <div className="navbar">
    <NavBar />
  </div>

  <div className="blog-single-container">
    <div className="blog-img-blog">
      <img src={card.img} alt={card.title} className="blog-single-img" />
    </div>

    <div className="text-blog-text">
      <h1>{card.title}</h1>
      <p className="blog-single-date">{card.date}</p>
      <p className="blog-single-author">{card.author}</p>
      <p className="blog-single-description">{card.description}</p>
    </div>
  </div>

  {/* ====== YANGI SECTION ====== */}

  <div className="blog-content-section">
    <h2>Preferred Form of Vitamin D?</h2>

    <p>
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout. The point of using Lorem Ipsum
      is that it has a more-or-less normal distribution of letters.
    </p>

    <ul>
      <li>Publishing packages and web pageLorem Ipsum as their default</li>
      <li>Content here, content here', making it look readable</li>
      <li>Packages and web pageLorem Ipsum as the default</li>
    </ul>

    <div className="quote-box">
      <p>
        “The first rule of any organic used in a business is that nature applied
        to an efficient operation will magnify the efficiency. The second is that
        organic applied to an inefficient operation will magnify the health.”
      </p>
    </div>

    <h2>Make perfect organic product with us</h2>

    <p>
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout.
    </p>

    <ol>
      <li>Publishing packages and web pageLorem Ipsum as their default</li>
      <li>Content here, content here', making it look readable</li>
      <li>Packages and web pageLorem Ipsum as the default</li>
      <li>More-or-less normal distribution of letters</li>
    </ol>
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
  );
};

export default Blog_single;