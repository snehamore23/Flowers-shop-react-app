import "./Contact.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import BodyContainer from "../../components/BodyContainer/BodyContainer"
import PageTitle from "../../components/PageTitle/PageTitle"

function Contact() {
  return (
    <div>
      <Navbar active="contact" />
      <PageTitle
        title="Get in touch with us"
        subtitle="We are just one call away"
      />

      <BodyContainer>
        <div className="contact-grid">
          <section className="contact-card contact-info">
            <h2>Contact Details</h2>
            <p>
              Have a question or need a custom order? We’re here to help. Reach out by phone,
              email, or use the quick form.
            </p>
            <div className="contact-meta">
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <strong>Email</strong>
                <p>hello@flowershop.com</p>
              </div>
              <div>
                <strong>Location</strong>
                <p>Flower Street, Garden City, India</p>
              </div>
            </div>
            <div className="contact-highlights">
              <span>Fast delivery support</span>
              <span>Custom bouquet requests</span>
              <span>Fresh flowers daily</span>
            </div>
          </section>

          <section className="contact-card contact-form">
            <h2>Send us a message</h2>
            <form className="contact-form-inner">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>

              <label>
                Email
                <input type="email" placeholder="Your email" />
              </label>

              <label>
                Message
                <textarea rows="5" placeholder="What can we help you with?" />
              </label>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default Contact