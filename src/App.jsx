import './App.css'
import {  Routes, Route, } from "react-router-dom";
import NotFound from './pages/Sulaymon/NotFound';
import Organick from './pages/Abbosbek/Organick';
import About from './pages/Abbosbek/About';

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Organick />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
