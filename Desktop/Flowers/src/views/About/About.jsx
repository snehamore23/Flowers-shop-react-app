import "./About.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import BodyContainer from "../../components/BodyContainer/BodyContainer"
import PageTitle from "../../components/PageTitle/PageTitle"
import aboutImg from "../../assets/1.png"

function About() {
  return (
    <div>
      <Navbar active="about" />
      <PageTitle
        title="Learn More About Us"
        subtitle="We provide beautiful, fresh flowers for every occasion."
      />
      <BodyContainer>
        <div className="about-row">
          <div className="about-text">
            <h2>Why choose Flowers?</h2>
            <p>
              Our flower shop delivers fresh blooms, thoughtful arrangements, and fast service.
              Every bouquet is created with love and designed to brighten your day.
            </p>
            <ul>
              <li>Fresh flowers sourced daily</li>
              <li>Custom bouquets for weddings and gifts</li>
              <li>Same-day delivery in the city</li>
            </ul>
            <p>
              We believe flowers bring joy, comfort, and celebration. Let us help you share
              those moments with the people who matter most.
            </p>
          </div>

          <div className="about-image-card">
            <img src={aboutImg} alt="Fresh flower bouquet" />
            <div className="about-card">
              <h3>Our Promise</h3>
              <p>
                Beautiful designs, on-time delivery, and a personal touch in every arrangement.
              </p>
            </div>
          </div>
        </div>
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default About