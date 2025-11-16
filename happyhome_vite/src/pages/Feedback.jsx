import React, { useState } from "react";
import logo from "../assets/HH_logo.png";
import "../styles.css";

export default function Feedback() {
  const [data, setData] = useState({
    name: "",
    service: "Home Cleaning",
    rating: 5,
    feedback: "",
    tags: [],
  });

  const services = [
    "Home Cleaning",
    "Plumbing",
    "Electrician",
    "AC Repair",
    "Appliance Repair",
    "Pest Control",
    "Salon & Beauty",
  ];

  const experienceTags = ["Excellent", "Very Good", "Good", "Average", "Poor"];

  const toggleTag = (t) => {
    setData((prev) => {
      const exists = prev.tags.includes(t);
      return {
        ...prev,
        tags: exists ? prev.tags.filter((x) => x !== t) : [...prev.tags, t],
      };
    });
  };

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    alert("Thank you for your feedback!" + "\n" + JSON.stringify(data, null, 2));
    setData({ name: "", service: "Home Cleaning", rating: 5, feedback: "", tags: [] });
  }

  return (
    <div className="feedbackPage">
      <header className="contactHeader">
        <div className="brandBlock">
          <img src={logo} alt="Happy Home" className="brandLogo" />
          <div>
            <div className="brandName">Happy Home</div>
            <div className="brandTag">Your trusted home service partner</div>
          </div>
        </div>

        <nav className="headerNav">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/booking">Booking</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <main className="container feedbackMain">
        <section className="feedbackHero">
          <h1>Share Your Experience</h1>
          <p className="lead">Your feedback helps us improve our services and deliver a better Happy Home experience to everyone.</p>

          <div className="formCard feedbackFormCard">
            <h2>Feedback Form</h2>

            <form className="contactForm" onSubmit={submit}>
              <label>
                Your Name <span className="required">*</span>
                <input name="name" value={data.name} onChange={handle} placeholder="Full name" />
              </label>

              <label>
                Select Service
                <select name="service" value={data.service} onChange={handle}>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label>
                Rate Your Experience
                <div className="ratingRow">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    name="rating"
                    value={data.rating}
                    onChange={handle}
                  />
                  <span className="ratingValue">{data.rating} ★</span>
                </div>
              </label>

              <label>
                Experience Tags (optional)
                <div className="tagContainer">
                  {experienceTags.map((t) => (
                    <span
                      key={t}
                      className={data.tags.includes(t) ? "tag selected" : "tag"}
                      onClick={() => toggleTag(t)}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </label>

              <label>
                Write Feedback <span className="required">*</span>
                <textarea
                  name="feedback"
                  rows="4"
                  value={data.feedback}
                  onChange={handle}
                  placeholder="Tell us about your experience"
                />
              </label>

              <button type="submit" className="primaryBtn">Submit Feedback</button>
            </form>
          </div>
        </section>

        <section className="faqSection">
          <h3>Why your feedback matters?</h3>
          <div className="faqGrid">
            <div className="faqCard">
              <h4>Improve Service Quality</h4>
              <p>We use your ratings to train our professionals and enhance service standards.</p>
            </div>

            <div className="faqCard">
              <h4>Resolve Issues Faster</h4>
              <p>Your feedback helps us understand what went wrong and fix it quickly.</p>
            </div>

            <div className="faqCard">
              <h4>Feature Upgrades</h4>
              <p>Suggestions you give are used to build new features and better tools.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">© {new Date().getFullYear()} Happy Home — Your trusted home partner.</footer>
    </div>
  );
}
