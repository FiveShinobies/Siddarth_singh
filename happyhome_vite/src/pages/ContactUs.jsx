import React, { useState } from "react";
// import React from "react";
import logo from "../assets/HH_logo.png";
import "../styles.css";


export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", category: "General", message: "" });
  const [status, setStatus] = useState(null);

  const categories = ["General", "Booking/Reschedule", "Refund", "Partner with us", "Technical Issue", "Other"];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // simple client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill all required fields." });
      return;
    }

    // simulate submit
    setStatus({ type: "loading", text: "Sending message..." });
    setTimeout(() => {
      setStatus({ type: "success", text: "Thanks! Your message has been received. We'll contact you soon." });
      setForm({ name: "", email: "", category: "General", message: "" });
    }, 1100);
  }

  return (
    <div className="contactPage">
      <header className="contactHeader">
        <div className="brandBlock">
          <img src={logo} alt="Happy Home" className="brandLogo" />
          <div>
            <div className="brandName">Happy Home</div>
            <div className="brandTag">Trusted household services</div>
          </div>
        </div>

        <nav className="headerNav">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/booking">Booking</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <main className="contactMain container">
        <section className="contactHero">
          <div className="heroLeft">
            <h1>Contact Support</h1>
            <p className="lead">Have a question or need help? We're here for you — call, email or send a message. Our support team is available 24×7.</p>

            <div className="contactCards">
              <div className="card">
                <h3>Call Us</h3>
                <p className="muted">Mon–Sun • 8:00 AM – 10:00 PM</p>
                <a href="tel:+919876543210" className="cardAction">+91 7309720766</a>
              </div>

              <div className="card">
                <h3>Email</h3>
                <p className="muted">Get a reply within 24 hours</p>
                <a href="mailto:support@happyhome.in" className="cardAction">support@happyhome.in</a>
              </div>

              <div className="card">
                <h3>Office</h3>
                <p className="muted">Head Office</p>
                <address className="cardAction">2nd Floor, Tech Park, Pune, Maharashtra, India</address>
              </div>
            </div>

            <div className="supportNotes">
              <h4>Quick help</h4>
              <ul>
                <li>For refunds and cancellations, choose the "Refund" category in the form.</li>
                <li>To partner with us, select "Partner with us" and we'll get back with requirements.</li>
                <li>In emergencies, please call our helpline directly.</li>
              </ul>
            </div>
          </div>

          <div className="heroRight">
            <div className="formCard">
              <h2>Send us a message</h2>

              <form onSubmit={handleSubmit} className="contactForm">
                <label>
                  Your name <span className="required">*</span>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
                </label>

                <label>
                  Email <span className="required">*</span>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" type="email" />
                </label>

                <label>
                  Category
                  <select name="category" value={form.category} onChange={handleChange}>
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>

                <label>
                  Message <span className="required">*</span>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?" />
                </label>

                <button type="submit" className="primaryBtn">Send Message</button>

                {status && (
                  <div className={`status ${status.type}`} role="status">{status.text}</div>
                )}
              </form>
            </div>

            <div className="mapPreview">
              <iframe title="office-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11610097555!2d73.72287998686524!3d18.52456485962579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0e98a0b668d%3A0xaea32f90bfae6ad!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v123456789" loading="lazy" />
            </div>
          </div>
        </section>

        {/* SUPPORT FAQ */}
        <section className="faqSection">
          <h3>Frequently Asked Questions</h3>
          <div className="faqGrid">
            <div className="faqCard">
              <h4>How do I reschedule a booking?</h4>
              <p>Open your booking, click "Reschedule" and pick a new slot. For urgent changes, call our helpline.</p>
            </div>

            <div className="faqCard">
              <h4>How long does a refund take?</h4>
              <p>Refunds are processed within 5–7 business days after approval.</p>
            </div>

            <div className="faqCard">
              <h4>What safety measures do you follow?</h4>
              <p>Pros wear PPE when required; we conduct background checks and follow sanitization guidelines.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">© {new Date().getFullYear()} Happy Home — All rights reserved.</footer>
    </div>
  );
}
