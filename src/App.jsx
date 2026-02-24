import './App.css'
import {  Routes, Route, } from "react-router-dom";
import NotFound from './pages/Sulaymon/NotFound';
import Organick from './pages/Abbosbek/Organick';
import About from './pages/Abbosbek/About';
import Shop from "../src/pages/Abbosbek/Shop"
import Shop_single from './pages/Abbosbek/Shop_single';
import Service from "../src/pages/Nixola/Service"
import Single from './pages/Nixola/Single';
import Portfolio from './pages/Nixola/Portfolio';
import Port_Single from './pages/Nixola/Port_single';
import Team from './pages/Nixola/Team';
import Contact from './pages/Sulaymon/Contact';
import Blog from './pages/Sulaymon/Blog'

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/pages" element={<NotFound />} />
        <Route path="/" element={<Organick />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="service" element={<Service />} />
        <Route path="single-service" element={<Single />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio-single" element={<Port_Single />} />
        <Route path="team" element={<Team />} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/shop_single/:id" element={<Shop_single />} />
      </Routes>
    </>
  )
}

export default App
