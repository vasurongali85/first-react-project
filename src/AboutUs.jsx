import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About LoveBites Bakery</h1>
        <p>
          At <span className="highlight">LoveBites Bakery</span>, we believe
          desserts are more than just food — they’re happiness in every bite.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Started from a small family kitchen, LoveBites has grown into a place
          where tradition meets creativity. We bake with passion and use only
          the freshest ingredients to make your moments special.
        </p>
      </section>

      {/* Our Values */}
      <section className="about-section values">
        <h2>Our Values</h2>
        <ul>
          <li>🍰 Freshness First — baked daily with love</li>
          <li>🥐 Quality Ingredients — only the finest</li>
          <li>🎂 Custom Creations — personalized for you</li>
          <li>❤️ Customer Happiness — your smile is our reward</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="about-cta">
        <h2>Celebrate with Us</h2>
        <p>
          Order your custom cake today or visit us to experience the magic in
          person!
        </p>
        <button className="btn-primary">Order Now</button>
      </section>
    </div>
  );
}

export default AboutUs;
