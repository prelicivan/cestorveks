import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/util/ScrollToTop'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/delatnost" element={<Work />} exact />
            <Route path="/kontakt" element={<Contact />} exact />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
