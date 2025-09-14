import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get in Touch with LoveBites Bakery</h1>
        <p>We’d love to hear from you! Questions, orders, or just to say hi – reach out!</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Type your message"></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Visit or Call Us</h2>
        <p>📍 123 Sweet Street, Dessert City, India</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 contact@lovebitesbakery.com</p>
      </section>
    </div>
  );
}

export default ContactUs;
