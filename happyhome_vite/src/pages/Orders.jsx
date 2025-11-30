import React from "react";
import logo from "../assets/HH_logo.png";
import "../styles.css";

export default function Orders() {
  const orders = [
    {
      id: "HH-10231",
      service: "Home Cleaning",
      date: "28 Nov 2025",
      status: "Completed",
      amount: "₹799",
    },
    {
      id: "HH-10202",
      service: "AC Repair",
      date: "26 Nov 2025",
      status: "In Progress",
      amount: "₹1,299",
    },
    {
      id: "HH-10188",
      service: "Plumbing",
      date: "20 Nov 2025",
      status: "Cancelled",
      amount: "₹0",
    },
  ];

  return (
    <div className="contactPage">
      <header className="contactHeader">
        <div className="brandBlock">
          <img src={logo} alt="Logo" className="brandLogo" />
          <div>
            <div className="brandName">Happy Home</div>
            <div className="brandTag">Your trusted home service partner</div>
          </div>
        </div>

        <nav className="headerNav">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/feedback">Feedback</a>
          <a href="/orders">Orders</a>
        </nav>
      </header>

      <main className="container">
        <h1>Your Orders</h1>
        <p className="lead">Track, review and manage all your service bookings here.</p>

        <div className="ordersGrid">
          {orders.map((o) => (
            <div key={o.id} className="orderCard">
              <div className="orderTop">
                <h3>{o.service}</h3>
                <span className={`statusTag ${o.status.toLowerCase()}`}>
                  {o.status}
                </span>
              </div>

              <p><strong>Order ID:</strong> {o.id}</p>
              <p><strong>Date:</strong> {o.date}</p>
              <p><strong>Amount:</strong> {o.amount}</p>

              <button className="primaryBtn" style={{ marginTop: "10px" }}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="siteFooter">
        © {new Date().getFullYear()} Happy Home — All rights reserved.
      </footer>
    </div>
  );
}
