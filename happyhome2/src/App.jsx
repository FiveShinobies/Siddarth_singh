import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import OrderHistory from "./pages/OrderHistory";
import ViewOrderDetail from "./pages/ViewOrderDetail";
import Feedback from "./pages/Feedback";


export default function App(){
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="brand">Happy Home</div>
        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
  <Route path="/" element={<OrderHistory />} />
  <Route path="/order/:orderId" element={<ViewOrderDetail />} />
  <Route path="/feedback/:orderId" element={<Feedback />} />
</Routes>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Happy Home</footer>
    </div>
  )
}
