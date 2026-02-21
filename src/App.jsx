import './App.css'
import {  Routes, Route, } from "react-router-dom";
import NotFound from './pages/Sulaymon/NotFound';
import Organick from './pages/Abbosbek/Organick';

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Organick />} />
      </Routes>
    </>
  )
}

export default App
