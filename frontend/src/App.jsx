import { useState } from 'react'
import {BrowserRouter, useParams} from 'react-router-dom'
import Navbar from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Charts from "./components/Charts.jsx";
import Hero from "./components/Hero.jsx";
import Documentation from "./components/Documentation.jsx";

import './App.css'
import './index.css'

// import
function App() {
  const [count, setCount] = useState(0)

  return (
    <><BrowserRouter>
        <div className="bg-white relative z-0 bg-primary">

            <header className="bg-white fixed top-0 w-full z-10">
                <Navbar/>
            </header>
            <Hero/>

            <Charts className="bg-white text-black" />

            <Documentation />
            <About />
      </div>

    </BrowserRouter>
    </>
  )
}

export default App
