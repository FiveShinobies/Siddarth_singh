import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Feedback from './pages/Feedback.jsx'
import Orders from "./pages/Orders.jsx";


export default function App(){
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="brand">Happy Home</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/feedback">Feedback</Link>
          <Link to="/orders">Orders</Link>

        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/orders" element={<Orders />} />

        </Routes>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Happy Home</footer>
    </div>
  )
}
