"use client"
import Head from 'next/head'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const WHITEPAPER_URL = '/RateCaster White Paper.pdf';

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [contactForm, setContactForm] = useState({
    email: '',
    message: ''
  })

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('.section-reveal');
      const items = document.querySelectorAll('.fade-in-item');
      
      sections.forEach(section => {
        if (isElementInView(section)) {
          section.classList.add('visible');
        }
      });
      
      items.forEach(item => {
        if (isElementInView(item)) {
          item.classList.add('visible');
        }
      });
    }
    
    function isElementInView(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
    setTimeout(() => {
      setShowThankYou(true)
      setTimeout(() => {
        setShowThankYou(false)
      }, 5000) // Increased to 5 seconds
    }, 300)
    setContactForm({ email: '', message: '' })
  }

  const handleWhitepaperClick = () => {
    try {
      window.open(encodeURI(WHITEPAPER_URL), '_blank');
    } catch (error) {
      console.error('Error opening whitepaper:', error);
      // Fallback
      window.location.href = encodeURI(WHITEPAPER_URL);
    }
  };

  return (
    <div>
      <Head>
        <title>RateCaster | Landing Page</title>
        <meta name="description" content="RateCaster: Rate, Review, and Elevate Decentralized Apps" />
      </Head>
      
      {/* Header (Top Navigation Bar) */}
      <header className="header">
        <div className="logo-gradient">RateCaster</div>
        <nav className="nav">
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Rate, Review, and Elevate Decentralized Apps</h1>
          <div className="glow-divider"></div>
          <p className="hero-subtitle">Your gateway to exploring and evaluating the best Dapps across multiple ecosystems.</p>
          <div className="hero-buttons">
            <button 
              className="cta-button whitepaper-btn"
              onClick={() => window.location.href = '/whitepaper'}
            >
              <Image 
                src="/doc-icon.svg" 
                alt="Whitepaper" 
                width={24} 
                height={24}
                className="btn-icon"
              />
              Whitepaper
            </button>
            <button 
              className="cta-button contact-btn"
              onClick={() => setShowModal(true)}
            >
              <Image 
                src="/contact-icon.svg" 
                alt="Contact" 
                width={24} 
                height={24}
                className="btn-icon"
              />
              Contact Us
            </button>
            <button 
              className="cta-button api-btn"
              onClick={() => window.location.href = 'https://ratecaster.gitbook.io/ratecaster-api/'}
            >
              <Image 
                src="/api-icon.svg" 
                alt="API" 
                width={24} 
                height={24}
                className="btn-icon"
              />
              API
            </button>
          </div>
        </div>
      </section>
      
      {/* Why RateCaster */}
      <section className="why section-reveal">
        <h2 className="section-title">Why RateCaster?</h2>
        <div className="benefits">
          <div className="benefit fade-in-item">
            <h3>Trust &amp; Transparency</h3>
            <p>Get unbiased ratings and user reviews across top ecosystems.</p>
          </div>
          <div className="benefit fade-in-item">
            <h3>Community Driven</h3>
            <p>Contribute your opinions to help other users explore the best Dapps.</p>
          </div>
          <div className="benefit fade-in-item">
            <h3>Seamless Discovery</h3>
            <p>Find trending projects instantly and stay updated with new releases.</p>
          </div>
          <div className="benefit fade-in-item">
            <h3>Metrics &amp; Achievements</h3>
            <p>"800+ Daily Active Accounts, 24,000+ Transactions" and counting!</p>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="how-it-works section-reveal" id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step fade-in-item">
            <h3>1. Find Dapps</h3>
            <p>Browse through a curated list of decentralized applications.</p>
          </div>
          <div className="step fade-in-item">
            <h3>2. Rate &amp; Review</h3>
            <p>Share your experiences and rate the projects you love.</p>
          </div>
          <div className="step fade-in-item">
            <h3>3. Empower Ecosystems</h3>
            <p>Help ecosystems grow by guiding new users to the best Dapps.</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq section-reveal" id="faq">
        <h2 className="section-title">FAQ</h2>
        <div className="faq-grid">
          <div className="faq-item fade-in-item">
            <h3>Is RateCaster free to use?</h3>
            <p>Absolutely! Users can explore, rate, and review without any cost. Some advanced features may require an account.</p>
          </div>
          <div className="faq-item fade-in-item">
            <h3>How do I add my Dapp to RateCaster?</h3>
            <p>Simply reach out to our support team or submit a request form. We'll review and list your Dapp if it meets our criteria.</p>
          </div>
          <div className="faq-item fade-in-item">
            <h3>Is RateCaster multilingual?</h3>
            <p>We're expanding globally and plan to offer multiple language supports soon!</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button 
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({
                    ...contactForm,
                    email: e.target.value
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({
                    ...contactForm,
                    message: e.target.value
                  })}
                />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
      
      {/* Thank You Modal */}
      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-modal">
            <button 
              className="thank-you-close-btn"
              onClick={() => setShowThankYou(false)}
            >
              ×
            </button>
            <div className="success-icon">✨</div>
            <h2 className="thank-you-title">Thank You!</h2>
            <p className="thank-you-message">
              Your message has been received. We'll get back to you shortly!
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        :root {
          --color-purple: #7E5BC2;
          --color-dark-purple: #563D7C;
          --color-yellow: #FFD700;
          --color-teal: #00BFA6;
          --color-white: #FFFFFF;
          --color-light-gray: #F2F2F2;
          --color-dark-gray: #333333;
          --color-hero-bg: #F8F4FD;
        }

        body, html {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          background-color: var(--color-light-gray);
          color: var(--color-dark-gray);
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: var(--color-white);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .logo-gradient {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
        }

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          opacity: 0;
          animation: fadein-up 1.2s ease forwards;
        }

        @keyframes fadein-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #B794F4;
          margin-bottom: 2.5rem;
          opacity: 0.8;
        }

        .glow-divider {
          height: 3px;
          width: 60%;
          margin: 1.5rem auto;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          border-radius: 4px;
          position: relative;
          animation: expandWidth 1s ease-out forwards,
                     glowPulse 1.5s ease-in-out infinite alternate;
          filter: brightness(1.2) contrast(1.2);
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0.5;
          }
          to {
            width: min(800px, 90%);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          from {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.7),
                        0 0 20px rgba(255, 0, 255, 0.7),
                        0 0 30px rgba(255, 138, 0, 0.7);
            filter: brightness(1.2);
          }
          to {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.9),
                        0 0 40px rgba(255, 0, 255, 0.9),
                        0 0 60px rgba(255, 138, 0, 0.9);
            filter: brightness(1.4);
          }
        }

        /* Why RateCaster */
        .why {
          background-color: var(--color-light-gray);
          padding: 3rem 2rem;
          text-align: center;
        }
        .why h2 {
          color: var(--color-purple);
          margin-bottom: 2rem;
        }
        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        .benefit {
          background-color: var(--color-white);
          padding: 1rem;
          border-radius: 4px;
        }
        .benefit h3 {
          color: var(--color-dark-purple);
          margin-bottom: 0.5rem;
        }

        /* How It Works */
        .how-it-works {
          background-color: var(--color-white);
          padding: 3rem 2rem;
          text-align: center;
        }
        .how-it-works h2 {
          color: var(--color-purple);
          margin-bottom: 2rem;
        }
        .steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }
        .step {
          max-width: 240px;
        }
        .step h3 {
          color: var(--color-dark-purple);
        }

        /* FAQ */
        .faq {
          text-align: center;
          padding: 6rem 0;
          width: 100%;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .faq-item {
          padding: 2rem;
          border: 1px solid rgba(183, 148, 244, 0.3);
          border-radius: 8px;
          background: rgba(183, 148, 244, 0.05);
          transition: all 0.3s ease;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 200px;
          box-shadow: 0 0 10px rgba(183, 148, 244, 0.1);
        }

        .faq-item:hover {
          border-color: rgba(183, 148, 244, 0.5);
          box-shadow: 0 0 20px rgba(183, 148, 244, 0.2);
        }

        .faq-item h3 {
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .faq-item p {
          color: #B794F4;
          line-height: 1.6;
          margin: 0;
          max-width: 280px;
        }

        @media (max-width: 1023px) {
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .faq-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          
          .faq {
            padding: 4rem 0;
          }
        }

        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          opacity: 0;
          animation: fadein-up 1.2s ease forwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
          justify-content: center;
        }

        .hero-buttons button {
          min-width: 160px;
          justify-content: center;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .whitepaper-btn {
          background: transparent;
          border: 2px solid var(--color-purple);
          color: var(--color-white);
          background: var(--color-purple);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                      inset 0 0 15px rgba(183, 148, 244, 0.2);
          transition: all 0.3s ease;
          animation: buttonGlow 2s infinite alternate;
          position: relative;
        }

        .whitepaper-btn:hover {
          background: var(--color-dark-purple);
          box-shadow: 0 0 25px rgba(183, 148, 244, 0.5),
                      inset 0 0 20px rgba(183, 148, 244, 0.3);
          border-color: rgba(183, 148, 244, 0.8);
          animation: buttonGlowHover 1.5s infinite alternate;
        }

        .contact-btn {
          background: transparent;
          border: 2px solid var(--color-purple);
          color: var(--color-white);
          background: var(--color-purple);
          box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                      inset 0 0 15px rgba(183, 148, 244, 0.2);
          transition: all 0.3s ease;
          animation: buttonGlow 2s infinite alternate;
          position: relative;
        }

        .contact-btn:hover {
          background: var(--color-dark-purple);
          box-shadow: 0 0 25px rgba(183, 148, 244, 0.5),
                      inset 0 0 20px rgba(183, 148, 244, 0.3);
          border-color: rgba(183, 148, 244, 0.8);
          animation: buttonGlowHover 1.5s infinite alternate;
        }

        .btn-icon {
          width: 24px;
          height: 24px;
          filter: drop-shadow(0 0 8px rgba(183, 148, 244, 0.6));
          transition: filter 0.3s ease;
        }

        .btn-icon:hover {
          filter: drop-shadow(0 0 12px rgba(183, 148, 244, 0.8));
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal {
          background: #111111;
          padding: 2.5rem;
          border-radius: 12px;
          width: 90%;
          max-width: 500px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        }

        .modal-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-align: center;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #ffffff;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .close-btn:hover {
          opacity: 1;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #ffffff;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: #222222;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 1rem;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00ffff;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }

        .form-group textarea {
          height: 120px;
          resize: vertical;
        }

        .submit-btn {
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff
          );
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .modal {
            padding: 1.5rem;
            margin: 1rem;
          }

          .modal-title {
            font-size: 1.75rem;
          }
        }

        .thank-you-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
          animation: fadeIn 0.3s ease-out;
        }

        .thank-you-modal {
          background: #111111;
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.5s ease-out;
          position: relative;
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: pulse 2s infinite;
        }

        .thank-you-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(
            90deg,
            #00ffff,
            #ff00ff,
            #ff8a00
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .thank-you-message {
          color: #ffffff;
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 300px;
          margin: 0 auto;
          line-height: 1.5;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .thank-you-modal {
            margin: 1rem;
            padding: 2rem;
          }

          .thank-you-title {
            font-size: 1.75rem;
          }

          .thank-you-message {
            font-size: 1rem;
          }
        }

        .thank-you-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s ease;
          padding: 0.5rem;
          line-height: 1;
          z-index: 1001;
        }

        .thank-you-close-btn:hover {
          opacity: 1;
        }

        @keyframes buttonGlow {
          from {
            box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                        inset 0 0 15px rgba(183, 148, 244, 0.2);
          }
          to {
            box-shadow: 0 0 20px rgba(183, 148, 244, 0.4),
                        inset 0 0 20px rgba(183, 148, 244, 0.25);
          }
        }

        @keyframes buttonGlowHover {
          from {
            box-shadow: 0 0 25px rgba(183, 148, 244, 0.5),
                        inset 0 0 20px rgba(183, 148, 244, 0.3);
          }
          to {
            box-shadow: 0 0 35px rgba(183, 148, 244, 0.6),
                        inset 0 0 30px rgba(183, 148, 244, 0.4);
          }
        }

        /* Responsive styles */
        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .whitepaper-btn, .contact-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }

        .section-title {
          font-size: 2rem;
          color: #ffffff;
          margin: 4rem auto 3rem;
          position: relative;
          display: inline-block;
          padding: 0.5rem 2rem;
          text-align: center;
          width: auto;
        }

        .section-title::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #B794F4;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                     inset 0 0 15px rgba(183, 148, 244, 0.2);
          animation: borderPulse 2s infinite alternate;
        }

        @keyframes borderPulse {
          from {
            box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                       inset 0 0 15px rgba(183, 148, 244, 0.2);
          }
          to {
            box-shadow: 0 0 25px rgba(183, 148, 244, 0.5),
                       inset 0 0 25px rgba(183, 148, 244, 0.3);
          }
        }

        .section-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .fade-in-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .benefits, .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .benefit, .step {
          padding: 2rem;
          border: 1px solid rgba(183, 148, 244, 0.3);
          border-radius: 8px;
          background: rgba(183, 148, 244, 0.05);
          transition: all 0.3s ease;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          box-shadow: 0 0 10px rgba(183, 148, 244, 0.1);
        }

        .benefit:hover, .step:hover {
          border-color: rgba(183, 148, 244, 0.5);
          box-shadow: 0 0 20px rgba(183, 148, 244, 0.2);
        }

        .benefit h3, .step h3 {
          margin-bottom: 1rem;
          color: #ffffff;
          font-size: 1.3rem;
        }

        .benefit p, .step p {
          color: #B794F4;
          line-height: 1.6;
          margin: 0;
          max-width: 280px;
        }

        .why, .how-it-works {
          text-align: center;
          padding: 4rem 0;
          max-width: 1400px;
          margin: 0 auto;
        }

        .steps {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          justify-content: center;
          padding: 0 2rem;
        }

        .how-it-works {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6rem 0;
          width: 100%;
        }

        .how-it-works .section-title {
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .benefits {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
          }
          
          .steps {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 1023px) {
          .benefits {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps {
            grid-template-columns: repeat(3, minmax(250px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .steps {
            grid-template-columns: repeat(1, 1fr);
            max-width: 400px;
          }
        }

        @media (max-width: 640px) {
          .benefits {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 1.8rem;
            margin: 3rem auto 2rem;
          }
          .how-it-works {
            padding: 4rem 0;
          }
        }

        .api-btn {
          background: transparent;
          border: 2px solid var(--color-purple);
          color: var(--color-white);
          background: var(--color-purple);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 0 15px rgba(183, 148, 244, 0.3),
                      inset 0 0 15px rgba(183, 148, 244, 0.2);
          transition: all 0.3s ease;
          animation: buttonGlow 2s infinite alternate;
          position: relative;
        }

        .api-btn:hover {
          background: var(--color-dark-purple);
          box-shadow: 0 0 25px rgba(183, 148, 244, 0.5),
                      inset 0 0 20px rgba(183, 148, 244, 0.3);
          border-color: rgba(183, 148, 244, 0.8);
          animation: buttonGlowHover 1.5s infinite alternate;
        }
      `}</style>
    </div>
  )
} 