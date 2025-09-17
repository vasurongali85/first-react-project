import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./home.css";


const marqueeProducts = [
  {image: "/images/chickenroll.jpeg" },
  { image:"/images/Snickers.jpg" },
    { image:"/images/pineapplecake.jpeg" },
    { image:"/images/gulab-jamun.jpg" },
     { image:"/images/coffeecake.jpg" },
      { image:"/images/Kit-Kat.jpg" },
     { image:"/images/vegcutlet.jpg" },
       { image:"/images/Peda.jpeg" }, 
      

];

const cities = ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"];

const heroSlides = [
  { title: "Bakery Fresh", desc: "Indulge in our daily baked cakes and pastries.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { title: "Summer Specials", desc: "Cool down with our refreshing drinks!", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    { title: "Bakery Fresh", desc: "Indulge in our daily baked cakes and pastries.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
  { title: "Summer Specials", desc: "Cool down with our refreshing drinks!", image: "/images/chickenroll.jpeg" },
    { title: "Bakery Fresh", desc: "Indulge in our daily baked cakes and pastries.", image: "/images/Kit-Kat.jpg" },
  { title: "Summer Specials", desc: "Cool down with our refreshing drinks!", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
     
];

function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="home-container">
      {/* Welcome Section */}
      <section className="welcome-section">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="./images/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag. <br /> Please use a placeholder video like <a href="https://www.w3schools.com/html/mov_bbb.mp4">this</a> if needed.
        </video>
        <motion.div
          className="welcome-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="st">LoveBites💖</h1>
          <h2 style={{ color: '#fa4170', fontSize: '3.5rem', textAlign: 'center' }}>
            India’s #1 food delivery app
          </h2>
          <h5>Freshly baked happiness delivered to your doorstep!</h5>
         
        </motion.div>
      </section>
 <div className="marquee-container">

        <div className="marquee">
          {marqueeProducts.concat(marqueeProducts).map((item, idx) => (
            <div key={idx} className="marquee-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}</div>
        </div>
     {/* Product Carousel */}

{/* Hero Carousel */}
<section className="hero-carousel">
  <h2 className="special-heading">This Week's Special Picks</h2>
  <p className="special-sub">Handpicked by our chef, just for you.</p>

  <div className="hero-carousel-container">
    {/* Left Arrow */}
    <button
      className="hero-arrow left"
      onClick={() =>
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      }
    >
      ❮
    </button>

    {/* Slide */}
    <div className="hero-slide">
      <img
        src={heroSlides[currentSlide].image}
        alt={heroSlides[currentSlide].title}
      />
      <div className="hero-gradient"></div>
      <div className="hero-caption">
        <h3>{heroSlides[currentSlide].title}</h3>
        <p>{heroSlides[currentSlide].desc}</p>
      </div>
    </div>

    {/* Right Arrow */}
    <button
      className="hero-arrow right"
      onClick={() =>
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }
    >
      ❯
    </button>
  </div>

  {/* Dot Indicators */}
  <div className="hero-dots">
    {heroSlides.map((_, idx) => (
      <span
        key={idx}
        className={`dot ${idx === currentSlide ? "active" : ""}`}
        onClick={() => setCurrentSlide(idx)}
      ></span>
    ))}
  </div>
</section>


      {/* Special Offer */}
      <motion.section
        className="special-offer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2>🎉 Special Offer</h2>
        <p>Buy 1 Get 1 Free on selected bakery items this week!</p>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="why-choose-us"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          {["Fresh Ingredients", "Fast Delivery", "Delicious Taste", "Affordable Prices"].map((item, idx) => (
            <motion.div
              key={idx}
              className="why-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cities Served */}
      <motion.section
        className="cities-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <h2>Our Delivery Cities</h2>
        <div className="cities-grid">
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              className="city-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              {city}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer animate-fade-in">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Company</h3>
            <p>About Us</p>
            <p>LoveBites Corporate</p>
            <p>Careers</p>
            <p>Our Team</p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <p>LoveBites Subscription</p>
            <p>Instacake Delivery</p>
            <p>Dine-in Deals</p>
            <p>Bakery Minis</p>
            <p>Quick Bites</p>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <p>Contact Us</p>
            <p>Help & Support</p>
            <p>Partner with Us</p>
            <p>Join Our Delivery</p>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <p>Terms & Conditions</p>
            <p>Cookie Policy</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <p>Life at LoveBites</p>
            <p>Explore with Us</p>
            <p>Bakery Buzz</p>
            <p>Sweet Treats</p>
          </div>
          <div className="footer-section">
            <h3>Social Links</h3>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Available in: Bangalore, Gurgaon, Hyderabad, Delhi, Mumbai, Pune, +685 cities</p>
          <p>For a better experience, download the LoveBites app now! <a href="#">Get it here</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;