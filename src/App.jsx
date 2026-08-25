//import { useState } from 'react'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  //const [count, setCount] = useState(0)

  return (
 <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 </Router>
  )
}

export default App
