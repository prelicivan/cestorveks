import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Work from './components/Work/Work'
import { workDataObjOne } from './components/Home/Data' 

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/delatnost" element={<Work />} exact />
        </Routes>
      </Router>
    </>
  )
}

export default App
