import React from "react";
import logo from "../assets/HH_logo.png";
import "../styles.css";

export default function About() {
  return (
    <div className="aboutContainer">

      <header className="aboutHeader">
        <div className="aboutLogo">
          <img src={logo} alt="Happy Home Logo" className="aboutLogoImg" />
          <span className="aboutBrand">Happy Home</span>
        </div>

        <nav className="aboutNavLinks">
          <a href="#">Register As A Professional</a>
          <a href="#">Help</a>
          <a href="#">Login / Sign Up</a>
        </nav>
      </header>

      <main className="aboutMain">
        <h1 className="aboutTitle">About Happy Home</h1>
        <section className="aboutIntroCard">
          <h2 className="aboutSubtitle">Transforming Home Services With Trust, Technology & Transparency</h2>

          <p>
            Happy Home is India’s fastest-growing household service platform—bringing
            professional home cleaning, beauty services, appliance repair, plumbing,
            electrical work, and more straight to your doorstep. With a mission to
            modernize and organize daily home services, we ensure verified
            professionals, transparent pricing, and top-tier convenience.
          </p>

          <p>
            Whether you're booking a salon-at-home experience or fixing a leaking tap,
            we guarantee safety, quality, and customer satisfaction through technology
            and trained experts.
          </p>
        </section>
        <section className="visionSection">
          <h2>Our Vision</h2>
          <p>
            To build the most reliable and customer‑centric home service ecosystem,
            powered by skilled professionals and backed by seamless digital experience.
          </p>
        </section>

        <section className="pillarsSection">
          <h2>The Three Pillars We Stand On</h2>

          <div className="pillarGrid">
            <div className="pillarCard">
              <h3>Trust & Safety</h3>
              <p>
                All professionals are background verified, skill‑tested, and
                continuously trained to maintain high service standards.
              </p>
            </div>

            <div className="pillarCard">
              <h3>Quality Assurance</h3>
              <p>
                Fixed pricing, expert tools, premium products, and repeat‑check systems
                ensure best‑in‑class results every time.
              </p>
            </div>

            <div className="pillarCard">
              <h3>Convenience Re‑imagined</h3>
              <p>
                Book from anywhere, track service status, get instant support, and enjoy
                a truly modern home care experience.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutServices">
          <h2>What We Offer</h2>

          <div className="aboutCardsGrid">
            <div className="aboutCard">
              <h3>Beauty & Wellness</h3>
              <p>
                Professional salon, spa, grooming, and wellness services at home.
                Hygienic, comfortable, and convenient.
              </p>
            </div>

            <div className="aboutCard">
              <h3>Home Cleaning</h3>
              <p>
                Deep cleaning, kitchen/bathroom cleaning, sofa/carpet shampooing,
                and full-home sanitization.
              </p>
            </div>

            <div className="aboutCard">
              <h3>AC & Appliance Repair</h3>
              <p>
                Expert repair, servicing, gas refilling, and installation services for AC,
                fridge, washing machine, RO and more.
              </p>
            </div>

            <div className="aboutCard">
              <h3>Plumbing & Electrical</h3>
              <p>
                Reliable solutions for leaks, wiring, fittings, installations,
                and emergency breakdown support.
              </p>
            </div>

            <div className="aboutCard">
              <h3>Pest Control</h3>
              <p>
                Eco‑friendly pest control for termites, cockroaches, mosquitoes and more.
              </p>
            </div>

            <div className="aboutCard">
              <h3>Insta Help</h3>
              <p>
                Quick‑response home assistance for urgent fixes and immediate needs.
              </p>
            </div>
          </div>
        </section>

        <section className="globalSection">
          <h2>Global Presence</h2>
          <p>
            Happy Home is expanding globally and delivering trusted services across
            multiple countries.
          </p>
          <ul>
            <li>Singapore</li>
            <li>UAE</li>
            <li>Saudi Arabia</li>
            <li>India</li>
          </ul>
        </section>
        
        <section className="whySection">
          <h2>Why Choose Happy Home?</h2>
          <ul>
            <li>Instant booking & doorstep convenience</li>
            <li>Transparent & affordable pricing</li>
            <li>Trained & background‑verified experts</li>
            <li>High‑quality tools & branded products</li>
            <li>24×7 customer support</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
